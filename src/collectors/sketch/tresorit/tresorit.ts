
import { SketchCollector } from '../../sketchCollector';

export class TresoritCollector extends SketchCollector {

    static CONFIG = {
        id: "tresorit",
        name: "tresorit",
        description: "i18n.collectors.tresorit.description",
        version: "0",
        website: "https://web.tresorit.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23767.jpg",
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
        entryUrl: "https://web.tresorit.com/account/billing",
    }

    constructor() {
        super(TresoritCollector.CONFIG);
    }
}
