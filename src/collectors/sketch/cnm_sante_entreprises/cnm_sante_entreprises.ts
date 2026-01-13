
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CnmSanteEntreprisesCollector extends SketchCollector {

    static CONFIG = {
        id: "cnm_sante_entreprises",
        name: "CNM Sante - Entreprises",
        description: "i18n.collectors.cnm_sante_entreprises.description",
        version: "0",
        website: "https://monespacepersonnel.cimut.net/web/cnm-entreprise",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123804.jpg",
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
        loginUrl: "https://monespacepersonnel.cimut.net/web/cnm-entreprise",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CnmSanteEntreprisesCollector.CONFIG);
    }
}
