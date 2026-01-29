
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TurnoCollector extends SketchCollector {

    static CONFIG = {
        id: "turno",
        name: "Turno",
        description: "i18n.collectors.turno.description",
        version: "0",
        website: "https://app.turno.com/payments/methods",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2203316.jpg",
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
        loginUrl: "https://app.turno.com/payments/methods",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TurnoCollector.CONFIG);
    }
}
