
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Partslink24Collector extends SketchCollector {

    static CONFIG = {
        id: "partslink24",
        name: "Partslink24",
        description: "i18n.collectors.partslink24.description",
        version: "0",
        website: "https://www.partslink24.com/partslink24/user/login.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236099.jpg",
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
        loginUrl: "https://www.partslink24.com/partslink24/user/login.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Partslink24Collector.CONFIG);
    }
}
