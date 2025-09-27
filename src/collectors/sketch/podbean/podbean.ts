
import { SketchCollector } from '../../sketchCollector';

export class PodbeanCollector extends SketchCollector {

    static CONFIG = {
        id: "podbean",
        name: "Podbean",
        description: "i18n.collectors.podbean.description",
        version: "0",
        website: "https://www.podbean.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43939.jpg",
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
        entryUrl: "https://www.podbean.com/login",
    }

    constructor() {
        super(PodbeanCollector.CONFIG);
    }
}
