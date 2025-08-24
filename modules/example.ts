import { Page } from '@playwright/test';
import exampleComponent from '../web_components/example';
import error from '../web_components/error'; 

class Example {
    async exampleTest(page: Page): Promise<void> {
        if (!exampleComponent.BASE_URL) throw new Error(error.baseUrlMissing);
        await page.goto(exampleComponent.BASE_URL);
        await page.waitForTimeout(3000);
    }
}

const example = new Example();
export { example };
