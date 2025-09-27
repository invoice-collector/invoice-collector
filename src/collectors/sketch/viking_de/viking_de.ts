
import { SketchCollector } from '../../sketchCollector';

export class VikingDeCollector extends SketchCollector {

    static CONFIG = {
        id: "viking_de",
        name: "viking.de",
        description: "i18n.collectors.viking_de.description",
        version: "0",
        website: "https://www.viking.de/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9599.jpg",
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
        entryUrl: "https://www.viking.de/de/login",
    }

    constructor() {
        super(VikingDeCollector.CONFIG);
    }
}
