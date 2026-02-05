
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmartItGlobalLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_it_global_ltd",
        name: "Smart IT Global Ltd",
        description: "i18n.collectors.smart_it_global_ltd.description",
        version: "0",
        website: "https://smartit.shop/de/18744/de/afl/report-onetime/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307409.jpg",
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
        loginUrl: "https://smartit.shop/de/18744/de/afl/report-onetime/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SmartItGlobalLtdCollector.CONFIG);
    }
}
