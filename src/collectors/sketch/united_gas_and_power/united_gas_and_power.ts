
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnitedGasAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "united_gas_and_power",
        name: "United Gas & Power",
        description: "i18n.collectors.united_gas_and_power.description",
        version: "0",
        website: "https://customer.ugp.co.uk/#/myBills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503855.jpg",
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
        loginUrl: "https://customer.ugp.co.uk/#/myBills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UnitedGasAndPowerCollector.CONFIG);
    }
}
