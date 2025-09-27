
import { SketchCollector } from '../../sketchCollector';

export class OnedirectFrCollector extends SketchCollector {

    static CONFIG = {
        id: "onedirect_fr",
        name: "onedirect(fr)",
        description: "i18n.collectors.onedirect_fr.description",
        version: "0",
        website: "https://www.onedirect.fr/customer/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/549886.jpg",
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
        entryUrl: "https://www.onedirect.fr/customer/account/",
    }

    constructor() {
        super(OnedirectFrCollector.CONFIG);
    }
}
