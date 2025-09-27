
import { SketchCollector } from '../../sketchCollector';

export class CrelloCollector extends SketchCollector {

    static CONFIG = {
        id: "crello",
        name: "Crello",
        description: "i18n.collectors.crello.description",
        version: "0",
        website: "https://crello.com/fr/user/settings/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185049.jpg",
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
        entryUrl: "https://crello.com/fr/user/settings/billing/",
    }

    constructor() {
        super(CrelloCollector.CONFIG);
    }
}
