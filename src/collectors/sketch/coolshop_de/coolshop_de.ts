
import { SketchCollector } from '../../sketchCollector';

export class CoolshopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "coolshop_de",
        name: "Coolshop.de",
        description: "i18n.collectors.coolshop_de.description",
        version: "0",
        website: "https://www.coolshop.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43199.jpg",
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
        entryUrl: "https://www.coolshop.de/login",
    }

    constructor() {
        super(CoolshopDeCollector.CONFIG);
    }
}
