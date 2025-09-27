
import { SketchCollector } from '../../sketchCollector';

export class PresseplusCollector extends SketchCollector {

    static CONFIG = {
        id: "presseplus",
        name: "Presseplus",
        description: "i18n.collectors.presseplus.description",
        version: "0",
        website: "https://www.presseplus.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65682.jpg",
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
        entryUrl: "https://www.presseplus.de/",
    }

    constructor() {
        super(PresseplusCollector.CONFIG);
    }
}
