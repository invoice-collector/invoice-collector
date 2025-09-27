
import { SketchCollector } from '../../sketchCollector';

export class ImpactTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "impact_telecom",
        name: "Impact Telecom",
        description: "i18n.collectors.impact_telecom.description",
        version: "0",
        website: "https://myaccount.tncii.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88380.jpg",
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
        entryUrl: "https://myaccount.tncii.com",
    }

    constructor() {
        super(ImpactTelecomCollector.CONFIG);
    }
}
