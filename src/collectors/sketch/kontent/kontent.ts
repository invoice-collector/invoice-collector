
import { SketchCollector } from '../../sketchCollector';

export class KontentCollector extends SketchCollector {

    static CONFIG = {
        id: "kontent",
        name: "KONTENT",
        description: "i18n.collectors.kontent.description",
        version: "0",
        website: "https://admin.kontent.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6792.jpg",
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
        entryUrl: "https://admin.kontent.com/",
    }

    constructor() {
        super(KontentCollector.CONFIG);
    }
}
