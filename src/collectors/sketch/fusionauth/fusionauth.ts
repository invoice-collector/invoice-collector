
import { SketchCollector } from '../../sketchCollector';

export class FusionauthCollector extends SketchCollector {

    static CONFIG = {
        id: "fusionauth",
        name: "FusionAuth",
        description: "i18n.collectors.fusionauth.description",
        version: "0",
        website: "https://account.fusionauth.io/account/billing/list-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841569.jpg",
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
        entryUrl: "https://account.fusionauth.io/account/billing/list-invoices",
    }

    constructor() {
        super(FusionauthCollector.CONFIG);
    }
}
