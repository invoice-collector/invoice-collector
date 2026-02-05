
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AthenaGlobalServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "athena_global_services",
        name: "Athena Global Services",
        description: "i18n.collectors.athena_global_services.description",
        version: "0",
        website: "https://www.athena-gs.fr/frontOffice/historique_commandes.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1438895.jpg",
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
        loginUrl: "https://www.athena-gs.fr/frontOffice/historique_commandes.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AthenaGlobalServicesCollector.CONFIG);
    }
}
