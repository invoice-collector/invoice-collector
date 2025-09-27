
import { SketchCollector } from '../../sketchCollector';

export class ErwinMullerCollector extends SketchCollector {

    static CONFIG = {
        id: "erwin_muller",
        name: "Erwin Muller",
        description: "i18n.collectors.erwin_muller.description",
        version: "0",
        website: "https://de.erwinmueller.com/account?aktion=showRech",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015112.jpg",
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
        entryUrl: "https://de.erwinmueller.com/account?aktion=showRech",
    }

    constructor() {
        super(ErwinMullerCollector.CONFIG);
    }
}
