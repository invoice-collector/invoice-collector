
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CharlotteWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "charlotte_water",
        name: "Charlotte Water",
        description: "i18n.collectors.charlotte_water.description",
        version: "0",
        website: "https://secure8.i-doxs.net/CityOfCharlotte/Secure/DistributionView.aspx?DistributionView=1%7C3513%7C8595%7C1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777438.jpg",
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
        loginUrl: "https://secure8.i-doxs.net/CityOfCharlotte/Secure/DistributionView.aspx?DistributionView=1%7C3513%7C8595%7C1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CharlotteWaterCollector.CONFIG);
    }
}
