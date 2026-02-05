
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleBnpCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_bnp",
        name: "Mutuelle BNP",
        description: "i18n.collectors.mutuelle_bnp.description",
        version: "0",
        website: "https://www.mutuelle.bnpparibas.fr/View/AccueilAssure.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127704.jpg",
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
        loginUrl: "https://www.mutuelle.bnpparibas.fr/View/AccueilAssure.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleBnpCollector.CONFIG);
    }
}
