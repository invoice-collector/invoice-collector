
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MobilcomDebitelCollector extends SketchCollector {

    static CONFIG = {
        id: "mobilcom_debitel",
        name: "Mobilcom Debitel",
        description: "i18n.collectors.mobilcom_debitel.description",
        version: "0",
        website: "https://www.freenet-mobilfunk.de/onlineservice/meine-rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/5780.jpg",
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
        loginUrl: "https://www.freenet-mobilfunk.de/onlineservice/meine-rechnungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MobilcomDebitelCollector.CONFIG);
    }
}
