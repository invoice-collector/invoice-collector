
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaBrigadeDeVeroCollector extends SketchCollector {

    static CONFIG = {
        id: "la_brigade_de_vero",
        name: "La Brigade de Vero",
        description: "i18n.collectors.la_brigade_de_vero.description",
        version: "0",
        website: "https://app.labrigadedevero.com/#/panel/formules",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919252.jpg",
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
        loginUrl: "https://app.labrigadedevero.com/#/panel/formules",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LaBrigadeDeVeroCollector.CONFIG);
    }
}
