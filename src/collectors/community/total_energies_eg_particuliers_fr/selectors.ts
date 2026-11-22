export const TotalEnergiesEgParticuliersFrSelectors = {
    // COOKIES

    BUTTON_REFUSE_COOKIES: {
        selector: '#popin_tc_privacy_button_2',
        info: 'refuse cookies button',
    },

    // LOGIN PAGE

    FIELD_LOGIN: {
        selector: '#formz-authentification-form-login',
        info: 'login input',
    },
    FIELD_PASSWORD: {
        selector: '#formz-authentification-form-password',
        info: 'password input',
    },
    BUTTON_SUBMIT: {
        selector: '#js--btn-validation-part',
        info: 'submit button',
    },
    CONTAINER_LOGIN_ALERT: {
        selector: '#fz-authentificationForm [fz-field-message-list] .fz-message-feedback',
        info: 'login alert container',
    },

    // 2FA PAGE

    CONTAINER_2FA: {
        selector: '#js--send-otp-part:not(.hide), #js--otp-input-part:not(.hide)',
        info: '2fa container',
    },
    CONTAINER_2FA_INSTRUCTIONS: {
        selector: '#js--otp-nb-new-client-part:not(.hide), #js--otp-nb-code-mail-part:not(.hide)',
        info: '2fa instructions container',
    },
    BUTTON_2FA_SEND: {
        selector: '#js--send-otp-part:not(.hide)',
        info: '2fa send code button',
    },
    CONTAINER_2FA_SEND_ALERT: {
        selector: '#js--otp-limit-send-part:not(.hide), #js--callout-error-otp-relance-part:not(.hide)',
        info: '2fa send alert container',
    },
    CONTAINER_2FA_INPUT: {
        selector: '#js--otp-input-part:not(.hide)',
        info: '2fa code input container',
    },
    FIELD_2FA_CODE: {
        selector: '#formz-authentification-form-otp-code',
        info: '2fa code input',
    },
    CONTAINER_2FA_ALERT: {
        selector: '[fz-field-message-list="otpCode"] .fz-message-feedback, #js--otp-input-part[data-otp-error]:not([data-otp-error=""]), #js--otp-limit-send-part:not(.hide)',
        info: '2fa alert container',
    },

    // CUSTOMER AREA

    LINK_LOGOUT: {
        selector: 'a[href*="logintype=logout"]',
        info: 'logout link',
    },

    // INVOICES PAGE

    // Payment schedules share the same container, keep the ones with an invoice link
    CONTAINER_INVOICES: {
        selector: 'div.detail-facture:has(a[data-trackingz-action="FACTURE"])',
        info: 'invoices container',
    },
    CONTAINER_INVOICE_NUMBER: {
        selector: '.detail-facture__label .text--body',
        info: 'invoice number container',
    },
    CONTAINER_INVOICE_DATE: {
        selector: '.detail-facture__date',
        info: 'invoice date container',
    },
    CONTAINER_INVOICE_AMOUNT: {
        selector: '.detail-facture__montant',
        info: 'invoice amount container',
    },
    BUTTON_INVOICE_DOWNLOAD: {
        selector: 'a.detail-facture__action[data-trackingz-action="FACTURE"]',
        info: 'invoice download link',
    },
};
