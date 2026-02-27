export const AmeliSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: "#idWArefuser, #refuseCookie",
        info: "refuse cookies button"
    },
    BUTTON_ACCEPT_COOKIES: {
        selector: "#idWAaccepter, #accepteCookie",
        info: "accept cookies button"
    },

    //LOGIN PAGE

    BUTTON_LOGIN: {
        selector: "#id_r_cnx_btn_code",
        info: "login button"
    },
    FIELD_NIR: {
        selector: "#connexioncompte_2nir_as",
        info: "id input"
    },
    FIELD_PASSWORD: {
        selector: "#connexioncompte_2connexion_code",
        info: "password input"
    },
    BUTTON_SUBMIT: {
        selector: "#id_r_cnx_btn_submit",
        info: "submit button"
    },
    CONTAINER_LOGIN_ALERT: {
        selector: "div.zone-alerte:not(.hidden), connexioncompte_2nir_as_messageErreur",
        info: "login alert container"
    },

    // 2FA PAGE

    CONTAINER_2FA_INSTRUCTIONS: {
        selector: "#blocEnvoyerOTP",
        info: "2fa instructions container"
    },
    BUTTON_2FA_SEND: {
        selector: "#BoutonGenerationOTP",
        info: "2fa send button"
    },
    FIELD_2FA_CODE_1: {
        selector: "#numOTP1",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_2: {
        selector: "#numOTP2",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_3: {
        selector: "#numOTP3",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_4: {
        selector: "#numOTP4",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_5: {
        selector: "#numOTP5",
        info: "2fa code input"
    },
    FIELD_2FA_CODE_6: {
        selector: "#numOTP6",
        info: "2fa code input"
    },
    LABEL_2FA_COOKIE: {
        selector: "label[for='enrolerDevice']",
        info: "2fa save login label"
    },
    BUTTON_2FA_SUBMIT: {
        selector: "#id_r_cnx_btn_submit",
        info: "2fa submit button"
    },
    CONTAINER_2FA_ALERT: {
        selector: "div.zone-alerte:not(.hidden)",
        info: "login alert container"
    },

    // PAIMENT PAGE

    CONTAINER_PAIEMENT: {
        selector: "#as_paiement_book",
        info: "paiement container"
    },
    BUTTON_MORE_PAIMENT: {
        selector: "#afficherPlusReleves",
        info: "show more paiement button"
    },
    CONTAINER_PAIEMENT_MONTH: {
        selector: "div.blocParMois",
        info: "month paiement container"
    },
    CONTAINER_LINK: {
        selector: "div.boutonTelechargement[onclick]",
        info: "paiment link container"
    },
    CONTAINER_PAIMENT_DATE: {
        selector: "p.moisDecompte",
        info: "order date container"
    }
}
