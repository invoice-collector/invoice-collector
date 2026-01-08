
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MsaPrestationRetraiteCollector extends SketchCollector {

    static CONFIG = {
        id: "msa_prestation_retraite",
        name: "MSA (Prestation retraite)",
        description: "i18n.collectors.msa_prestation_retraite.description",
        version: "0",
        website: "https://monespaceprive.msa.fr/lfy/web/msa/retraite?modalId=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126046.jpg",
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
        loginUrl: "https://monespaceprive.msa.fr/lfy/web/msa/retraite?modalId=2",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MsaPrestationRetraiteCollector.CONFIG);
    }
}
