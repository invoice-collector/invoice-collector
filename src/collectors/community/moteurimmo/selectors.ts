/**
 * Selectors for MoteurImmo.
 *
 * The payments page holds a single table, which allows structural selectors
 * that do not depend on the language. Its columns are:
 * Date | Montant | Quantité | Durée | Réduction | Plateforme | Collaborateur(s) | Facture
 */

export const MoteurimmoSelectors = {

    //LOGIN PAGE

    // The fields carry neither `name` nor `id`, so they are matched on their
    // type, scoped to the form to avoid the alert selector sitting in the
    // navigation bar.
    FIELD_EMAIL: {
        selector: "form input[type='email']",
        info: "email input field"
    },
    FIELD_PASSWORD: {
        selector: "form input[type='password']",
        info: "password input field"
    },
    BUTTON_SUBMIT: {
        selector: "form input[type='submit']",
        info: "submit form button"
    },

    //PAYMENTS PAGE

    CONTAINER_INVOICE: {
        selector: "table tbody tr",
        info: "invoice row"
    },

    //INVOICE ROW

    // "03/08/2026 à 13:11"
    CELL_DATE: {
        selector: "td:nth-child(1)",
        info: "invoice date cell"
    },
    // "733.9€"
    CELL_AMOUNT: {
        selector: "td:nth-child(2)",
        info: "invoice amount cell"
    },
    // Direct PDF link, carrying the download attribute
    LINK_INVOICE: {
        selector: "a[href$='.pdf']",
        info: "invoice download link"
    },

    //PAGINATION

    // Matched on its label, for lack of a selector of its own.
    BUTTON_PAGE: {
        selector: "button",
        info: "pagination button"
    }
}
