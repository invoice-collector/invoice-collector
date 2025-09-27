
import { SketchCollector } from '../../sketchCollector';

export class WillyTelCollector extends SketchCollector {

    static CONFIG = {
        id: "willy_tel",
        name: "Willy.Tel",
        description: "i18n.collectors.willy_tel.description",
        version: "0",
        website: "https://portal.willytel.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9186.jpg",
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
        entryUrl: "https://portal.willytel.de/",
    }

    constructor() {
        super(WillyTelCollector.CONFIG);
    }
}
