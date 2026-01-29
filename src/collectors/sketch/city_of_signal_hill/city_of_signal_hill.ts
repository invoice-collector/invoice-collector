
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfSignalHillCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_signal_hill",
        name: "City of Signal Hill",
        description: "i18n.collectors.city_of_signal_hill.description",
        version: "0",
        website: "https://signalhillca.municipalonlinepayments.com/signalhillca/utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176401.jpg",
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
        loginUrl: "https://signalhillca.municipalonlinepayments.com/signalhillca/utilities",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfSignalHillCollector.CONFIG);
    }
}
