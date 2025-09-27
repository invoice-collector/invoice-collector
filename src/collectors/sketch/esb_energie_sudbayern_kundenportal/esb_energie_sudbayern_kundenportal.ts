
import { SketchCollector } from '../../sketchCollector';

export class EsbEnergieSudbayernKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "esb_energie_sudbayern_kundenportal",
        name: "ESB Energie Sudbayern Kundenportal",
        description: "i18n.collectors.esb_energie_sudbayern_kundenportal.description",
        version: "0",
        website: "https://onlineservice.esb.de/portal/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515182.jpg",
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
        entryUrl: "https://onlineservice.esb.de/portal/dashboard",
    }

    constructor() {
        super(EsbEnergieSudbayernKundenportalCollector.CONFIG);
    }
}
