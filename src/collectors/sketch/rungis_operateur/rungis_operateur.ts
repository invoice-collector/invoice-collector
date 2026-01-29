
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RungisOperateurCollector extends SketchCollector {

    static CONFIG = {
        id: "rungis_operateur",
        name: "RUNGIS OPERATEUR",
        description: "i18n.collectors.rungis_operateur.description",
        version: "0",
        website: "https://www.rungisoperateur.com/dashboard/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729764.jpg",
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
        loginUrl: "https://www.rungisoperateur.com/dashboard/factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RungisOperateurCollector.CONFIG);
    }
}
