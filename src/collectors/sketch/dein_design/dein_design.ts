
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeinDesignCollector extends SketchCollector {

    static CONFIG = {
        id: "dein_design",
        name: "Dein Design",
        description: "i18n.collectors.dein_design.description",
        version: "0",
        website: "https://www.deindesign.de/de/secure/customer/orderStats.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1880041.jpg",
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
        loginUrl: "https://www.deindesign.de/de/secure/customer/orderStats.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DeinDesignCollector.CONFIG);
    }
}
