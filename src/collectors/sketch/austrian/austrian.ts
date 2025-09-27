
import { SketchCollector } from '../../sketchCollector';

export class AustrianCollector extends SketchCollector {

    static CONFIG = {
        id: "austrian",
        name: "Austrian",
        description: "i18n.collectors.austrian.description",
        version: "0",
        website: "https://www.austrian.com/at/de/rechnungsbeleg",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777407.jpg",
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
        entryUrl: "https://www.austrian.com/at/de/rechnungsbeleg",
    }

    constructor() {
        super(AustrianCollector.CONFIG);
    }
}
