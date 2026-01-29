
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GmfContratsCollector extends SketchCollector {

    static CONFIG = {
        id: "gmf_contrats",
        name: "Gmf - Contrats",
        description: "i18n.collectors.gmf_contrats.description",
        version: "0",
        website: "https://espace-assure.gmf.fr/public/pages/securite/IC2.faces",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106539.jpg",
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
        loginUrl: "https://espace-assure.gmf.fr/public/pages/securite/IC2.faces",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GmfContratsCollector.CONFIG);
    }
}
