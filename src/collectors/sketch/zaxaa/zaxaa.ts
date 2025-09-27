
import { SketchCollector } from '../../sketchCollector';

export class ZaxaaCollector extends SketchCollector {

    static CONFIG = {
        id: "zaxaa",
        name: "Zaxaa",
        description: "i18n.collectors.zaxaa.description",
        version: "0",
        website: "https://www.zaxaa.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32677.jpg",
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
        entryUrl: "https://www.zaxaa.com/login",
    }

    constructor() {
        super(ZaxaaCollector.CONFIG);
    }
}
