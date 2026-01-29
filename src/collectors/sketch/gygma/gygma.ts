
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GygmaCollector extends SketchCollector {

    static CONFIG = {
        id: "gygma",
        name: "GYGMA",
        description: "i18n.collectors.gygma.description",
        version: "0",
        website: "https://www.bygma.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21971.jpg",
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
        loginUrl: "https://www.bygma.dk",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GygmaCollector.CONFIG);
    }
}
