
import { SketchCollector } from '../../sketchCollector';

export class MenageATroisCollector extends SketchCollector {

    static CONFIG = {
        id: "menage_a_trois",
        name: "Menage A Trois",
        description: "i18n.collectors.menage_a_trois.description",
        version: "0",
        website: "https://extranet.ximi.xelya.io/Ximi/swee/Account/SignIn?returnUrl=%2Fximi%2Fswee%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137155.jpg",
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
        entryUrl: "https://extranet.ximi.xelya.io/Ximi/swee/Account/SignIn?returnUrl=%2Fximi%2Fswee%2F",
    }

    constructor() {
        super(MenageATroisCollector.CONFIG);
    }
}
