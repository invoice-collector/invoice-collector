
import { SketchCollector } from '../../sketchCollector';

export class PsohubCollector extends SketchCollector {

    static CONFIG = {
        id: "psohub",
        name: "PSOhub",
        description: "i18n.collectors.psohub.description",
        version: "0",
        website: "https://psohubdevelopment.chargebee.com/portal/v2/billing_history?source=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297684.jpg",
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
        entryUrl: "https://psohubdevelopment.chargebee.com/portal/v2/billing_history?source=home",
    }

    constructor() {
        super(PsohubCollector.CONFIG);
    }
}
