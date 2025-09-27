
import { SketchCollector } from '../../sketchCollector';

export class LimangoCollector extends SketchCollector {

    static CONFIG = {
        id: "limango",
        name: "Limango",
        description: "i18n.collectors.limango.description",
        version: "0",
        website: "http://www.limango.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28915.jpg",
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
        entryUrl: "http://www.limango.de",
    }

    constructor() {
        super(LimangoCollector.CONFIG);
    }
}
