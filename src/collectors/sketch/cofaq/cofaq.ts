
import { SketchCollector } from '../../sketchCollector';

export class CofaqCollector extends SketchCollector {

    static CONFIG = {
        id: "cofaq",
        name: "COFAQ",
        description: "i18n.collectors.cofaq.description",
        version: "0",
        website: "https://demat.cofaq.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095941.jpg",
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
        entryUrl: "https://demat.cofaq.fr",
    }

    constructor() {
        super(CofaqCollector.CONFIG);
    }
}
