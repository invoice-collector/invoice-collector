
import { SketchCollector } from '../../sketchCollector';

export class WanimoCollector extends SketchCollector {

    static CONFIG = {
        id: "wanimo",
        name: "Wanimo",
        description: "i18n.collectors.wanimo.description",
        version: "0",
        website: "https://www.wanimo.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124846.jpg",
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
        entryUrl: "https://www.wanimo.com/fr/",
    }

    constructor() {
        super(WanimoCollector.CONFIG);
    }
}
