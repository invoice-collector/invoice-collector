
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RexRotaryCollector extends SketchCollector {

    static CONFIG = {
        id: "rex_rotary",
        name: "Rex Rotary",
        description: "i18n.collectors.rex_rotary.description",
        version: "0",
        website: "https://rex-demat.fr/programs/adminirex_client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4234035.jpg",
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
        loginUrl: "https://rex-demat.fr/programs/adminirex_client",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RexRotaryCollector.CONFIG);
    }
}
