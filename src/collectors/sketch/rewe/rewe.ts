
import { SketchCollector } from '../../sketchCollector';

export class ReweCollector extends SketchCollector {

    static CONFIG = {
        id: "rewe",
        name: "REWE",
        description: "i18n.collectors.rewe.description",
        version: "0",
        website: "https://shop.rewe.de/mydata/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3841.jpg",
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
        entryUrl: "https://shop.rewe.de/mydata/login",
    }

    constructor() {
        super(ReweCollector.CONFIG);
    }
}
