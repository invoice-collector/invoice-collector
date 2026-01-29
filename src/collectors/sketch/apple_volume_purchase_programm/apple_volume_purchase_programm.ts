
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppleVolumePurchaseProgrammCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_volume_purchase_programm",
        name: "Apple Volume Purchase Programm",
        description: "i18n.collectors.apple_volume_purchase_programm.description",
        version: "0",
        website: "https://vpp.itunes.apple.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170975.jpg",
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
        loginUrl: "https://vpp.itunes.apple.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AppleVolumePurchaseProgrammCollector.CONFIG);
    }
}
