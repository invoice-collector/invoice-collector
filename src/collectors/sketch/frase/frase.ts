
import { SketchCollector } from '../../sketchCollector';

export class FraseCollector extends SketchCollector {

    static CONFIG = {
        id: "frase",
        name: "Frase",
        description: "i18n.collectors.frase.description",
        version: "0",
        website: "https://app.frase.io/app/dashboard/settings/plan/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1226953.jpg",
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
        entryUrl: "https://app.frase.io/app/dashboard/settings/plan/",
    }

    constructor() {
        super(FraseCollector.CONFIG);
    }
}
