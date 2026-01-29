
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrandLyonHabitatCollector extends SketchCollector {

    static CONFIG = {
        id: "grand_lyon_habitat",
        name: "Grand Lyon habitat",
        description: "i18n.collectors.grand_lyon_habitat.description",
        version: "0",
        website: "https://www.grandlyonhabitat.fr/extranet/tenant/avis-echeance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2014887.jpg",
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
        loginUrl: "https://www.grandlyonhabitat.fr/extranet/tenant/avis-echeance",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GrandLyonHabitatCollector.CONFIG);
    }
}
