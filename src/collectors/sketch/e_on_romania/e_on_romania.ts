
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EOnRomaniaCollector extends SketchCollector {

    static CONFIG = {
        id: "e_on_romania",
        name: "E-ON Romania",
        description: "i18n.collectors.e_on_romania.description",
        version: "0",
        website: "https://www.eon.ro/myline/facturile-mele",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654595.jpg",
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
        loginUrl: "https://www.eon.ro/myline/facturile-mele",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EOnRomaniaCollector.CONFIG);
    }
}
