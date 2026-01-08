
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EFactureDiacCollector extends SketchCollector {

    static CONFIG = {
        id: "e_facture_diac",
        name: "E-Facture (Diac)",
        description: "i18n.collectors.e_facture_diac.description",
        version: "0",
        website: "https://diac-diaclocation.e-facture.net/esp_ent/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1616496.jpg",
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
        loginUrl: "https://diac-diaclocation.e-facture.net/esp_ent/index.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EFactureDiacCollector.CONFIG);
    }
}
