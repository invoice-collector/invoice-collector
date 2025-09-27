
import { SketchCollector } from '../../sketchCollector';

export class CurtMariaMedicalCollector extends SketchCollector {

    static CONFIG = {
        id: "curt_maria_medical",
        name: "CURT MARIA MEDICAL",
        description: "i18n.collectors.curt_maria_medical.description",
        version: "0",
        website: "https://shop.curtmaria.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/944054.jpg",
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
        entryUrl: "https://shop.curtmaria.de/customer/account/login/",
    }

    constructor() {
        super(CurtMariaMedicalCollector.CONFIG);
    }
}
