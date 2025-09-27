
import { SketchCollector } from '../../sketchCollector';

export class LempodCollector extends SketchCollector {

    static CONFIG = {
        id: "lempod",
        name: "lempod",
        description: "i18n.collectors.lempod.description",
        version: "0",
        website: "https://app.lempod.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421334.jpg",
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
        entryUrl: "https://app.lempod.com/billing",
    }

    constructor() {
        super(LempodCollector.CONFIG);
    }
}
