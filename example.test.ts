import dotenv from "dotenv";
dotenv.config({ path: "./example.env" });

import { test, BrowserContext, Page } from "@playwright/test";
import { example } from "./modules/example";

const success: string[] = [];
const failure: string[] = [];

async function sendToDiscord(success: string[], failure: string[]) {
	const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
	if (!webhookUrl) return;

	let message = `**Test Summary**`;

	if (success.length > 0 && failure.length === 0) {
		// message += `\n**All test passed Sucessfully!**\n*Auth*\n- Admin Login\n*Admin*\n- Manage Category`;
		message += `\nAll test passed Sucessfully!✅\n${success
		.map((s) => `- ${s}`)
		.join("\n")}`;
	} else if (success.length > 0 && failure.length > 0) {
		message += `\n✅ Success:\n${success.map((s) => `- ${s}`).join("\n")}`;
		message += `\n\n❌ Failure:\n${failure.map((f) => `- ${f}`).join("\n")}`;
	} else if (success.length === 0 && failure.length > 0) {
		message += `\nAll test failed!❌\n${failure
		.map((f) => `- ${f}`)
		.join("\n")}`;
	} else {
		message += `\nNo tests were run.`;
	}

	await fetch(webhookUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
		username: "Example automation",
		content: message,
		}),
	});
	}

	test.describe("Example test", () => {
	let context: BrowserContext;
	let page: Page;

	test.beforeAll(async ({ browser }) => {
		context = await browser.newContext();
		page = await context.newPage();
	});

	test.afterAll(async () => {
		await context.close();
		await sendToDiscord(success, failure);
	});

	test("Example", async () => {
		try {
		await example.exampleTest(page);
		success.push("Example passed successfully.");
		} catch (error) {
		failure.push(`Example  failed: ${error.message}`);
		}
	});

});
