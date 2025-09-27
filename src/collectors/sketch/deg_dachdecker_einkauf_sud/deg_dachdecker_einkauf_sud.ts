
import { SketchCollector } from '../../sketchCollector';

export class DegDachdeckerEinkaufSudCollector extends SketchCollector {

    static CONFIG = {
        id: "deg_dachdecker_einkauf_sud",
        name: "DEG Dachdecker Einkauf Sud",
        description: "i18n.collectors.deg_dachdecker_einkauf_sud.description",
        version: "0",
        website: "https://www.deg-sued.de/dde/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427341.jpg",
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
        entryUrl: "https://www.deg-sued.de/dde/de/login",
    }

    constructor() {
        super(DegDachdeckerEinkaufSudCollector.CONFIG);
    }
}
