
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DussmannCollector extends SketchCollector {

    static CONFIG = {
        id: "dussmann",
        name: "Dussmann",
        description: "i18n.collectors.dussmann.description",
        version: "0",
        website: "https://www.kulturkaufhaus.de/de/anmelden?bpmtab=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/834062.jpg",
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
        loginUrl: "https://www.kulturkaufhaus.de/de/anmelden?bpmtab=login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DussmannCollector.CONFIG);
    }
}
