
import { SketchCollector } from '../../sketchCollector';

export class InkassofortCollector extends SketchCollector {

    static CONFIG = {
        id: "inkassofort",
        name: "inkassofort",
        description: "i18n.collectors.inkassofort.description",
        version: "0",
        website: "https://www.inkasso-sofort.de/forderungsmanager/startseite",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874584.jpg",
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
        entryUrl: "https://www.inkasso-sofort.de/forderungsmanager/startseite",
    }

    constructor() {
        super(InkassofortCollector.CONFIG);
    }
}
