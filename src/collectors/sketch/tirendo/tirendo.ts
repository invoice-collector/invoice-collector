
import { SketchCollector } from '../../sketchCollector';

export class TirendoCollector extends SketchCollector {

    static CONFIG = {
        id: "tirendo",
        name: "Tirendo",
        description: "i18n.collectors.tirendo.description",
        version: "0",
        website: "https://www.tirendo.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14900.jpg",
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
        entryUrl: "https://www.tirendo.de/login",
    }

    constructor() {
        super(TirendoCollector.CONFIG);
    }
}
