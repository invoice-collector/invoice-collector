
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FacilFamillesParisCollector extends SketchCollector {

    static CONFIG = {
        id: "facil_familles_paris",
        name: "Facil\'Familles Paris",
        description: "i18n.collectors.facil_familles_paris.description",
        version: "0",
        website: "https://teleservices.paris.fr/ffaxssl/page/teamnetauth/action/login/error/invalid",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106547.jpg",
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
        entryUrl: "https://teleservices.paris.fr/ffaxssl/page/teamnetauth/action/login/error/invalid",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FacilFamillesParisCollector.CONFIG);
    }
}
