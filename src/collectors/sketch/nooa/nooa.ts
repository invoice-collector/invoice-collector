
import { SketchCollector } from '../../sketchCollector';

export class NooaCollector extends SketchCollector {

    static CONFIG = {
        id: "nooa",
        name: "NOOA",
        description: "i18n.collectors.nooa.description",
        version: "0",
        website: "https://web.nooa.app/de-DE/app/admin-cockpit/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732520.jpg",
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
        entryUrl: "https://web.nooa.app/de-DE/app/admin-cockpit/billing",
    }

    constructor() {
        super(NooaCollector.CONFIG);
    }
}
