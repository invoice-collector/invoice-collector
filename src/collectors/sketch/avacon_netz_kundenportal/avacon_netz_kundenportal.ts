
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AvaconNetzKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "avacon_netz_kundenportal",
        name: "Avacon Netz - Kundenportal",
        description: "i18n.collectors.avacon_netz_kundenportal.description",
        version: "0",
        website: "https://www.avacon-netz.de/de/service/public/kundenportal.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62229.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.avacon-netz.de/de/service/public/kundenportal.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AvaconNetzKundenportalCollector.CONFIG);
    }
}
