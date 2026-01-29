
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FortumCollector extends SketchCollector {

    static CONFIG = {
        id: "fortum",
        name: "Fortum",
        description: "i18n.collectors.fortum.description",
        version: "0",
        website: "https://www.mittfortum.se/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/143858.jpg",
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
        loginUrl: "https://www.mittfortum.se/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FortumCollector.CONFIG);
    }
}
