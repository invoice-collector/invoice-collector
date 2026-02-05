
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YahooCollector extends SketchCollector {

    static CONFIG = {
        id: "yahoo",
        name: "Yahoo",
        description: "i18n.collectors.yahoo.description",
        version: "0",
        website: "https://mysubscriptions.yahoo.com/manage/billing-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920877.jpg",
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
        loginUrl: "https://mysubscriptions.yahoo.com/manage/billing-statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YahooCollector.CONFIG);
    }
}
