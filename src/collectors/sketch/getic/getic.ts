
import { SketchCollector } from '../../sketchCollector';

export class GeticCollector extends SketchCollector {

    static CONFIG = {
        id: "getic",
        name: "Getic",
        description: "i18n.collectors.getic.description",
        version: "0",
        website: "https://www.getic.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2841409.jpg",
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
        entryUrl: "https://www.getic.de/",
    }

    constructor() {
        super(GeticCollector.CONFIG);
    }
}
