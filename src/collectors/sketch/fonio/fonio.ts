
import { SketchCollector } from '../../sketchCollector';

export class FonioCollector extends SketchCollector {

    static CONFIG = {
        id: "fonio",
        name: "Fonio",
        description: "i18n.collectors.fonio.description",
        version: "0",
        website: "https://app.fonio.ai/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4221011.jpg",
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
        entryUrl: "https://app.fonio.ai/payments",
    }

    constructor() {
        super(FonioCollector.CONFIG);
    }
}
