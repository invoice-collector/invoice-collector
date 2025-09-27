
import { SketchCollector } from '../../sketchCollector';

export class OuiSncfCollector extends SketchCollector {

    static CONFIG = {
        id: "oui_sncf",
        name: "OUI.sncf",
        description: "i18n.collectors.oui_sncf.description",
        version: "0",
        website: "https://www.oui.sncf/services-train/suivi-commande",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35507.jpg",
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
        entryUrl: "https://www.oui.sncf/services-train/suivi-commande",
    }

    constructor() {
        super(OuiSncfCollector.CONFIG);
    }
}
