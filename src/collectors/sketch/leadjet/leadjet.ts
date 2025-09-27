
import { SketchCollector } from '../../sketchCollector';

export class LeadjetCollector extends SketchCollector {

    static CONFIG = {
        id: "leadjet",
        name: "Leadjet",
        description: "i18n.collectors.leadjet.description",
        version: "0",
        website: "https://account.leadjet.io/settings/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/711728.jpg",
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
        entryUrl: "https://account.leadjet.io/settings/account",
    }

    constructor() {
        super(LeadjetCollector.CONFIG);
    }
}
