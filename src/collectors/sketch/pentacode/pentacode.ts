
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PentacodeCollector extends SketchCollector {

    static CONFIG = {
        id: "pentacode",
        name: "Pentacode",
        description: "i18n.collectors.pentacode.description",
        version: "0",
        website: "https://manage.pentacode.app/settings/billing?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654161.jpg",
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
        loginUrl: "https://manage.pentacode.app/settings/billing?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PentacodeCollector.CONFIG);
    }
}
