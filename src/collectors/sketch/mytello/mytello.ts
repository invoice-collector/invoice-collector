
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MytelloCollector extends SketchCollector {

    static CONFIG = {
        id: "mytello",
        name: "Mytello",
        description: "i18n.collectors.mytello.description",
        version: "0",
        website: "https://app.mytello.com/de/register",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492132.jpg",
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
        loginUrl: "https://app.mytello.com/de/register",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MytelloCollector.CONFIG);
    }
}
