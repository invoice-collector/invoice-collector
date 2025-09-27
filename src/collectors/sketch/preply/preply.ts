
import { SketchCollector } from '../../sketchCollector';

export class PreplyCollector extends SketchCollector {

    static CONFIG = {
        id: "preply",
        name: "Preply",
        description: "i18n.collectors.preply.description",
        version: "0",
        website: "https://preply.de/de/settings/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226577.jpg",
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
        entryUrl: "https://preply.de/de/settings/history",
    }

    constructor() {
        super(PreplyCollector.CONFIG);
    }
}
