export const OpenaiSelectors = {

    // SETTINGS PAGE

    BUTTON_ACCOUNT: {
        selector: "button[id*='trigger-Account']",
        info: "account button"
    },
    BUTTON_MANAGE_PAYMENTS: {
        selector: "div[id*='content-Account'] button[class*='btn-secondary']:not([data-state])",
        info: "manage payments button"
    }
}
