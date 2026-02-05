
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ResellerinterfaceGreenmarkDoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "resellerinterface_greenmark_do_de",
        name: "Resellerinterface Greenmark/do.de",
        description: "i18n.collectors.resellerinterface_greenmark_do_de.description",
        version: "0",
        website: "https://my.resellerinterface.de/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387449.jpg",
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
        loginUrl: "https://my.resellerinterface.de/finance/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ResellerinterfaceGreenmarkDoDeCollector.CONFIG);
    }
}
