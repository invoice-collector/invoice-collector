
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SynestyCollector extends SketchCollector {

    static CONFIG = {
        id: "synesty",
        name: "Synesty",
        description: "i18n.collectors.synesty.description",
        version: "0",
        website: "https://apps.synesty.com/logon/en-us",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153631.jpg",
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
        loginUrl: "https://apps.synesty.com/logon/en-us",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SynestyCollector.CONFIG);
    }
}
