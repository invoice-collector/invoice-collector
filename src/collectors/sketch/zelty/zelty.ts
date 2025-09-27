
import { SketchCollector } from '../../sketchCollector';

export class ZeltyCollector extends SketchCollector {

    static CONFIG = {
        id: "zelty",
        name: "zelty",
        description: "i18n.collectors.zelty.description",
        version: "0",
        website: "https://zelty.fr/contact.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1264915.jpg",
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
        entryUrl: "https://zelty.fr/contact.html",
    }

    constructor() {
        super(ZeltyCollector.CONFIG);
    }
}
