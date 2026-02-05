
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnercoopGrandComptesCollector extends SketchCollector {

    static CONFIG = {
        id: "enercoop_grand_comptes",
        name: "enercoop grand comptes",
        description: "i18n.collectors.enercoop_grand_comptes.description",
        version: "0",
        website: "https://mon-espace.enercoop.fr/grandscomptes-collectivites/sites",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526340.jpg",
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
        loginUrl: "https://mon-espace.enercoop.fr/grandscomptes-collectivites/sites",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EnercoopGrandComptesCollector.CONFIG);
    }
}
