
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Cram101Collector extends SketchCollector {

    static CONFIG = {
        id: "cram101",
        name: "cram101",
        description: "i18n.collectors.cram101.description",
        version: "0",
        website: "http://cram101.com/index.html#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167114.jpg",
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
        loginUrl: "http://cram101.com/index.html#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Cram101Collector.CONFIG);
    }
}
