import { google } from "googleapis";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";

export const dynamic = "force-dynamic";

const SHEET_ID =
  "1GHNBichDWn4qB4LLeHCQygBwdzpSf7L8KcUraQ0NQgc";

function getSheets() {
  const credentials = JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

function createMcpServer() {
  const server = new McpServer({
    name: "foodee-mcp-test",
    version: "1.0.0",
  });

  server.registerTool(
    "get_test_menu",
    {
      description: "Read the test menu from Google Sheets",
      inputSchema: {},
    },
    async () => {
      const sheets = getSheets();

      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: "Menu!A:B",
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result.data.values ?? [], null, 2),
          },
        ],
      };
    }
  );

  server.registerTool(
    "update_test_item_price",
    {
      description: "Update a menu item's price",
      inputSchema: {
        item_name: z.string(),
        price: z.number().positive(),
      },
    },
    async ({ item_name, price }) => {
      const sheets = getSheets();

      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: "Menu!A:B",
      });

      const rows = result.data.values ?? [];

      const index = rows.findIndex(
        (row, i) =>
          i > 0 &&
          String(row[0]).toLowerCase() === item_name.toLowerCase()
      );

      if (index === -1) {
        return {
          content: [
            { type: "text", text: `Item not found: ${item_name}` },
          ],
        };
      }

      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `Menu!B${index + 1}`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[price]],
        },
      });

      return {
        content: [
          {
            type: "text",
            text: `Updated ${item_name} price to ${price}`,
          },
        ],
      };
    }
  );

  return server;
}

export async function POST(request) {
  const server = createMcpServer();

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await server.connect(transport);

  return transport.handleRequest(request);
}

export async function GET() {
  return Response.json({
    name: "Foodee MCP Test",
    status: "running",
  });
}