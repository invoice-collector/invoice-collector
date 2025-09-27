
import { SketchCollector } from '../../sketchCollector';

export class IngramerCollector extends SketchCollector {

    static CONFIG = {
        id: "ingramer",
        name: "Ingramer",
        description: "i18n.collectors.ingramer.description",
        version: "0",
        website: "https://inflact.com/cabinet/profile/payments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555223.jpg",
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
        entryUrl: "https://inflact.com/cabinet/profile/payments/",
    }

    constructor() {
        super(IngramerCollector.CONFIG);
    }
}
