
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SeriouslySimpleMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "seriously_simple_marketing",
        name: "Seriously Simple Marketing",
        description: "i18n.collectors.seriously_simple_marketing.description",
        version: "0",
        website: "https://measurementmarketing.io/member/?ref=ssmnav",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64964.jpg",
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
        loginUrl: "https://measurementmarketing.io/member/?ref=ssmnav",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SeriouslySimpleMarketingCollector.CONFIG);
    }
}
