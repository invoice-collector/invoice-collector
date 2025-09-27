
import { SketchCollector } from '../../sketchCollector';

export class KomdslCollector extends SketchCollector {

    static CONFIG = {
        id: "komdsl",
        name: "komDSL",
        description: "i18n.collectors.komdsl.description",
        version: "0",
        website: "https://komdsl.plusportal.de/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9403.jpg",
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
        entryUrl: "https://komdsl.plusportal.de/#/",
    }

    constructor() {
        super(KomdslCollector.CONFIG);
    }
}
