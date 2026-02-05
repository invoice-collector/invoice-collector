
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LevaparcInCarParkCollector extends SketchCollector {

    static CONFIG = {
        id: "levaparc_in_car_park",
        name: "LEVAPARC - in Car Park",
        description: "i18n.collectors.levaparc_in_car_park.description",
        version: "0",
        website: "https://reza-levaparc.axigap.com/Account/Factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503864.jpg",
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
        loginUrl: "https://reza-levaparc.axigap.com/Account/Factures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LevaparcInCarParkCollector.CONFIG);
    }
}
