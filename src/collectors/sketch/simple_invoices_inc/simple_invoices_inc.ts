
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimpleInvoicesIncCollector extends SketchCollector {

    static CONFIG = {
        id: "simple_invoices_inc",
        name: "Simple Invoices Inc",
        description: "i18n.collectors.simple_invoices_inc.description",
        version: "0",
        website: "https://simpleinvoices.io/settings/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/516592.jpg",
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
        loginUrl: "https://simpleinvoices.io/settings/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SimpleInvoicesIncCollector.CONFIG);
    }
}
