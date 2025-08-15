import { info } from "console";

export const UrssafSelectors = {

    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "#footer_tc_privacy_button_2",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#footer_tc_privacy_button",
        info: "accept cookies button"
    },

    //LOGIN PAGE

    INPUT_USERNAME: {
        selector: "#compte_id",
        info: "username input"
    },
    INPUT_PASSWORD: {
        selector: "#compte_mdp",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "#identification button[type='submit']",
        info: "submit button"
    },
    CONTAINER_FORMAT_ALERT: {
        selector: "#identifiant-erreur",
        info: "format error container"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "#identification-modal > div > div > div.modal-body",
        info: "login alert container"
    },

    //INVOICES PAGE
    
    DROPDOW_YEAR: {
        selector: ".card-body select",
        info: "select year dropdown"
    },
    BUTTON_DOWNLOAD: (id: string) => ({
        selector: `.card-body table tr:has(a[href*='${id}']) .lienHref`,
        info: "download invoice button"
    }),
}
