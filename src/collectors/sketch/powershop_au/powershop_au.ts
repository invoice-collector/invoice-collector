
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PowershopAuCollector extends SketchCollector {

    static CONFIG = {
        id: "powershop_au",
        name: "Powershop AU",
        description: "i18n.collectors.powershop_au.description",
        version: "0",
        website: "https://www.powershop.com.au/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747839.jpg",
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
        loginUrl: "https://www.powershop.com.au/#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PowershopAuCollector.CONFIG);
    }
}
