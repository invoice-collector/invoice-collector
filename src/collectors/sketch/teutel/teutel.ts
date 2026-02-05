
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeutelCollector extends SketchCollector {

    static CONFIG = {
        id: "teutel",
        name: "Teutel",
        description: "i18n.collectors.teutel.description",
        version: "0",
        website: "https://kundenportal.teutel.de/portal/docs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778003.jpg",
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
        loginUrl: "https://kundenportal.teutel.de/portal/docs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeutelCollector.CONFIG);
    }
}
