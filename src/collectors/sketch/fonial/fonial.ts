
import { SketchCollector } from '../../sketchCollector';

export class FonialCollector extends SketchCollector {

    static CONFIG = {
        id: "fonial",
        name: "fonial",
        description: "i18n.collectors.fonial.description",
        version: "0",
        website: "https://kundenkonto.fonial.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22341.jpg",
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
        entryUrl: "https://kundenkonto.fonial.de/login",
    }

    constructor() {
        super(FonialCollector.CONFIG);
    }
}
