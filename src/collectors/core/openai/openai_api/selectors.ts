export const OpenaiSelectors = {

    // CONTAINER INVOICE

    CONTAINER_NO_INVOICE: {
        selector: "main > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)",
        info: "no invoice container"
    },
    CONTAINER_INVOICE: {
        selector: "table tbody tr",
        info: "invoice container"
    },
    CONTAINER_ID: {
        selector: "td:nth-child(1)",
        info: "invoice id container"
    },
    CONTAINER_AMOUNT: {
        selector: "td:nth-child(3)",
        info: "invoice amount container"
    },
    CONTAINER_DATE: {
        selector: "td:nth-child(4)",
        info: "invoice date container"
    },
    BUTTON_VIEW: {
        selector: "td:nth-child(5) a",
        info: "invoice date container"
    },

    // DOWNLOAD PAGE

    BUTTON_DOWNLOAD: {
        selector: "button[data-testid='download-invoice-receipt-pdf-button']",
        info: "invoice date container"
    }
}
