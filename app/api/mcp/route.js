
import { google } from "googleapis";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";

const SHEET_ID = "1GHNBichDWn4qB4LLeHCQygBwdzpSf7L8KcUraQ0NQgc";

async function getSheets() {
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
    name: "Foodee MCP Test",
    version: "1.0.0",
  });

  server.registerTool(
    "get_test_menu",
    {
      description: "Read the test menu from Google Sheets",
      inputSchema: {},
    },
    async () => {
      const sheets = await getSheets();

      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: "Menu!A:B",
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result.data.values ?? []),
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
        price: z.number(),
      },
    },
    async ({ item_name, price }) => {
      const sheets = await getSheets();

      const result = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: "Menu!A2:B",
      });

      const rows = result.data.values ?? [];
      const rowIndex = rows.findIndex(
        (row) =>
          row[0]?.trim().toLowerCase() === item_name.trim().toLowerCase()
      );
      
      if (rowIndex === -1) {
        return {
          content: [
            { type: "text", text: `Item not found: ${item_name}` },
          ],
        };
      }
      
      const rowNumber = rowIndex + 2;

      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `Menu!B${rowNumber}`,
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

export async function GET() {
  return Response.json({
    name: "Foodee MCP Test",
    status: "running",
  });
}

export async function POST(request) {
  const server = createMcpServer();

  const transport =
    new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });

  await server.connect(transport);

  return transport.handleRequest(request);
}
