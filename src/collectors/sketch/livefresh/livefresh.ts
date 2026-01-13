
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LivefreshCollector extends SketchCollector {

    static CONFIG = {
        id: "livefresh",
        name: "Livefresh",
        description: "i18n.collectors.livefresh.description",
        version: "0",
        website: "https://livefresh.de/apps/download-pdf/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192206.jpg",
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
        loginUrl: "https://livefresh.de/apps/download-pdf/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LivefreshCollector.CONFIG);
    }
}
