
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PgworksCollector extends SketchCollector {

    static CONFIG = {
        id: "pgworks",
        name: "PGworks",
        description: "i18n.collectors.pgworks.description",
        version: "0",
        website: "https://myaccount.pgworks.com/Portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387259.jpg",
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
        loginUrl: "https://myaccount.pgworks.com/Portal/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PgworksCollector.CONFIG);
    }
}
