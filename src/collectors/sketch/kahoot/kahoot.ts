
import { SketchCollector } from '../../sketchCollector';

export class KahootCollector extends SketchCollector {

    static CONFIG = {
        id: "kahoot",
        name: "Kahoot",
        description: "i18n.collectors.kahoot.description",
        version: "0",
        website: "https://kahoot.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/796132.jpg",
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
        entryUrl: "https://kahoot.com/",
    }

    constructor() {
        super(KahootCollector.CONFIG);
    }
}
