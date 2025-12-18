import { OrangeCommonSelectors } from "../common/selectors";

export const OrangeSelectors = {

    ...OrangeCommonSelectors,

    // SELECT CONTRACT PAGE

    CONTAINER_CONTRACT_ERROR: {
        selector: ".alert .ob1-alert-title",
        info: "contract error container"
    },
    CONTAINER_FIRST_CONTRACT: {
        selector: "ecm-selector-contract > div > div li:first-of-type > ecm-mat-item-list > a",
        info: "first contract container"
    },
    CONTAINER_FIRST_CONTRACT_PRO: {
        selector: "mikado-hub-contracts-page li:first-of-type > mikado-item-list-button > a",
        info: "first pro contract container"
    },

    // INVOICE PAGE

    CONTAINER_INVOICE: {
        selector: "bills-history-table tbody tr:has(payment-status-column)",
        info: "invoice container"
    },
    BUTTON_PDF: {
        selector: "a.bp-downloadIcon",
        info: "invoice PDF download button"
    },
    CONTAINER_DATE: {
        selector: ".bp-dateColumn span",
        info: "invoice date container"
    },
    CONTAINER_AMOUNT: {
        selector: ".bp-amountColumn span",
        info: "invoice amount container"
    },

    // DOWNLOAD PAGE

    CONTAINER_VPN_ERROR: {
        selector: "ecm-layout-container .feedback .feedback-text:nth-of-type(1)",
        info: "VPN error container"
    }
}
