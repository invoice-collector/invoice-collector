
import { SketchCollector } from '../../sketchCollector';

export class BisonCollector extends SketchCollector {

    static CONFIG = {
        id: "bison",
        name: "Bison",
        description: "i18n.collectors.bison.description",
        version: "0",
        website: "https://trade.bisonapp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1291106.jpg",
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
        entryUrl: "https://trade.bisonapp.com/login",
    }

    constructor() {
        super(BisonCollector.CONFIG);
    }
}
