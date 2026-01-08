
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AssurOPoilCollector extends SketchCollector {

    static CONFIG = {
        id: "assur_o_poil",
        name: "Assur\'o\'Poil",
        description: "i18n.collectors.assur_o_poil.description",
        version: "0",
        website: "https://www.assuropoil.fr/espace-adherent/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123808.jpg",
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
        loginUrl: "https://www.assuropoil.fr/espace-adherent/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AssurOPoilCollector.CONFIG);
    }
}
