
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SchenkerCollector extends SketchCollector {

    static CONFIG = {
        id: "schenker",
        name: "Schenker",
        description: "i18n.collectors.schenker.description",
        version: "0",
        website: "https://eschenker.dbschenker.com/app/launch-page/public?language_region=de-DE_DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1202439.jpg",
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
        loginUrl: "https://eschenker.dbschenker.com/app/launch-page/public?language_region=de-DE_DE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchenkerCollector.CONFIG);
    }
}
