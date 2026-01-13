
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FlachServiceBundCollector extends SketchCollector {

    static CONFIG = {
        id: "flach_service_bund",
        name: "Flach Service-Bund",
        description: "i18n.collectors.flach_service_bund.description",
        version: "0",
        website: "https://flach-buettelborn.servicebund.com/account/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2228051.jpg",
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
        loginUrl: "https://flach-buettelborn.servicebund.com/account/reports",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlachServiceBundCollector.CONFIG);
    }
}
