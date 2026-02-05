
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CourrierDuVoyageurCollector extends SketchCollector {

    static CONFIG = {
        id: "courrier_du_voyageur",
        name: "COURRIER DU VOYAGEUR",
        description: "i18n.collectors.courrier_du_voyageur.description",
        version: "0",
        website: "https://mon-compte.courrier-du-voyageur.com/bpi.php?p=ec_account&mapage=fac",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1674356.jpg",
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
        loginUrl: "https://mon-compte.courrier-du-voyageur.com/bpi.php?p=ec_account&mapage=fac",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CourrierDuVoyageurCollector.CONFIG);
    }
}
