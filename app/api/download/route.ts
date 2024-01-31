import puppeteer, { Browser, Page } from "puppeteer";

export async function POST(req: Request): Promise<Response> {
  const url: string = "http://localhost:3000";

  try {
    const browser: Browser = await puppeteer.launch({
      headless: true,
    });
    const page: Page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    const pdf: Buffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error(error);
    const message: string =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
