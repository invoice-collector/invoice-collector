
import { SketchCollector } from '../../sketchCollector';

export class EarPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "ear_portal",
        name: "Ear-Portal",
        description: "i18n.collectors.ear_portal.description",
        version: "0",
        website: "https://www.ear-system.de/ear-portal/#no-back",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210960.jpg",
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
        entryUrl: "https://www.ear-system.de/ear-portal/#no-back",
    }

    constructor() {
        super(EarPortalCollector.CONFIG);
    }
}
