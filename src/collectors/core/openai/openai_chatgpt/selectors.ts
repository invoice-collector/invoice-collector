export const OpenaiSelectors = {

    // SETTINGS PAGE

    BUTTON_ACCOUNT: {
        selector: "button[id*='trigger-Account']",
        info: "account button"
    },
    BUTTON_MANAGE_PAYMENTS: {
        selector: "div[id*='content-Account'] button[class*='btn-secondary']:not([data-state])",
        info: "manage payments button"
    },
    BUTTON_SEARCH_INVOICES: {
        selector: "div[data-testid='page-container-main'] a[data-testid='collapsed-invoice-search']",
        info: "search invoices input"
    },
    BUTTON_MORE_INVOICES: {
        selector: "::-p-xpath(//div[@data-testid='page-container-main']//a[@data-testid='collapsed-invoice-search']/../../../../../div/button)",
        info: "more invoices button"
    },
    CONTAINER_NO_ORDERS: {
        selector: "::-p-xpath(//div[@data-testid='page-container-main']//a[@data-testid='collapsed-invoice-search']/../../../../..//div[@data-testid='empty-state'])",
        info: "no orders container"
    },
    CONTAINER_INVOICES: {
        selector: "::-p-xpath(//div[@data-testid='page-container-main']//a[@data-testid='collapsed-invoice-search']/../../../../../div/div/a)",
        info: "invoices container"
    },

    // DATA

    CONTAINER_DATE: {
        selector: "div > div:nth-child(1) > span",
        info: "invoice date"
    },
    CONTAINER_AMOUNT: {
        selector: "div > div:nth-child(2) > span",
        info: "invoice amount"
    }
}
