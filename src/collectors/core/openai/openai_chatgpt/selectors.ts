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
    CONTAINER_NO_ORDERS: {
        selector: "::-p-xpath(//div[@data-testid='page-container-main']//a[@data-testid='collapsed-invoice-search']/../../../../..//div[@data-testid='empty-state'])",
        info: "no orders container"
    }
}
