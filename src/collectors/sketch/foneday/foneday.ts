
import { SketchCollector } from '../../sketchCollector';

export class FonedayCollector extends SketchCollector {

    static CONFIG = {
        id: "foneday",
        name: "Foneday",
        description: "i18n.collectors.foneday.description",
        version: "0",
        website: "https://foneday.shop/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801071.jpg",
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
        entryUrl: "https://foneday.shop/dashboard",
    }

    constructor() {
        super(FonedayCollector.CONFIG);
    }
}
