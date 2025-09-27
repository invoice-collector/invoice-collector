
import { SketchCollector } from '../../sketchCollector';

export class PanoskinCollector extends SketchCollector {

    static CONFIG = {
        id: "panoskin",
        name: "Panoskin",
        description: "i18n.collectors.panoskin.description",
        version: "0",
        website: "https://login.panoskin.com/#/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246204.jpg",
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
        entryUrl: "https://login.panoskin.com/#/profile",
    }

    constructor() {
        super(PanoskinCollector.CONFIG);
    }
}
