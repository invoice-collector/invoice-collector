
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VentyaClearInvoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "ventya_clear_invoice",
        name: "Ventya - Clear\'Invoice",
        description: "i18n.collectors.ventya_clear_invoice.description",
        version: "0",
        website: "https://einvoicing01.clear-invoice.com/CI01/secure/document.form?opener=documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639961.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://einvoicing01.clear-invoice.com/CI01/secure/document.form?opener=documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VentyaClearInvoiceCollector.CONFIG);
    }
}
