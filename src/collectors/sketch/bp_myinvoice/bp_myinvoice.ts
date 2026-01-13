
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BpMyinvoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "bp_myinvoice",
        name: "BP MyInvoice",
        description: "i18n.collectors.bp_myinvoice.description",
        version: "0",
        website: "https://flpnwc-h04f3hobm1.dispatcher.eu2.hana.ondemand.com/sites/fuels#AirBP-Invoice_Search&/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/435453.jpg",
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
        loginUrl: "https://flpnwc-h04f3hobm1.dispatcher.eu2.hana.ondemand.com/sites/fuels#AirBP-Invoice_Search&/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BpMyinvoiceCollector.CONFIG);
    }
}
