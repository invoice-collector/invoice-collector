
import { SketchCollector } from '../../sketchCollector';

export class SolitKapitalCollector extends SketchCollector {

    static CONFIG = {
        id: "solit_kapital",
        name: "Solit Kapital",
        description: "i18n.collectors.solit_kapital.description",
        version: "0",
        website: "https://app.solit-kapital.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307604.jpg",
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
        entryUrl: "https://app.solit-kapital.de/login",
    }

    constructor() {
        super(SolitKapitalCollector.CONFIG);
    }
}
