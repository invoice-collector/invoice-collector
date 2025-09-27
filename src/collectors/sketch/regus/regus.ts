
import { SketchCollector } from '../../sketchCollector';

export class RegusCollector extends SketchCollector {

    static CONFIG = {
        id: "regus",
        name: "Regus",
        description: "i18n.collectors.regus.description",
        version: "0",
        website: "https://myregus.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8835.jpg",
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
        entryUrl: "https://myregus.com/#/login",
    }

    constructor() {
        super(RegusCollector.CONFIG);
    }
}
