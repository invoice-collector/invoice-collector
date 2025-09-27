
import { SketchCollector } from '../../sketchCollector';

export class LeadsbridgeCollector extends SketchCollector {

    static CONFIG = {
        id: "leadsbridge",
        name: "LeadsBridge",
        description: "i18n.collectors.leadsbridge.description",
        version: "0",
        website: "https://leadsbridge.com/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10090.jpg",
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
        entryUrl: "https://leadsbridge.com/app/login",
    }

    constructor() {
        super(LeadsbridgeCollector.CONFIG);
    }
}
