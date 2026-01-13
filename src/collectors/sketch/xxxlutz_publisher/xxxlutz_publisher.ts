
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class XxxlutzPublisherCollector extends SketchCollector {

    static CONFIG = {
        id: "xxxlutz_publisher",
        name: "XXXLutz Publisher",
        description: "i18n.collectors.xxxlutz_publisher.description",
        version: "0",
        website: "https://pvn.xxxlutz.de/index.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1291035.jpg",
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
        loginUrl: "https://pvn.xxxlutz.de/index.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XxxlutzPublisherCollector.CONFIG);
    }
}
