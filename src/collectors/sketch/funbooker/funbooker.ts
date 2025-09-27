
import { SketchCollector } from '../../sketchCollector';

export class FunbookerCollector extends SketchCollector {

    static CONFIG = {
        id: "funbooker",
        name: "Funbooker",
        description: "i18n.collectors.funbooker.description",
        version: "0",
        website: "https://www.funbooker.com/fr/funpro/virements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230280.jpg",
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
        entryUrl: "https://www.funbooker.com/fr/funpro/virements",
    }

    constructor() {
        super(FunbookerCollector.CONFIG);
    }
}
