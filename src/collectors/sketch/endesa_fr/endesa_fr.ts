
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EndesaFrCollector extends SketchCollector {

    static CONFIG = {
        id: "endesa_fr",
        name: "endesa.fr",
        description: "i18n.collectors.endesa_fr.description",
        version: "0",
        website: "https://www.portail-endesa.fr/factures/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4073731.jpg",
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
        loginUrl: "https://www.portail-endesa.fr/factures/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EndesaFrCollector.CONFIG);
    }
}
