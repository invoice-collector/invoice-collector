
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AffinityWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "affinity_water",
        name: "Affinity Water",
        description: "i18n.collectors.affinity_water.description",
        version: "0",
        website: "https://myonlineaccount.affinitywater.co.uk/Account/Login?ReturnUrl=%2F&ReturnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16066.jpg",
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
        loginUrl: "https://myonlineaccount.affinitywater.co.uk/Account/Login?ReturnUrl=%2F&ReturnUrl=%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AffinityWaterCollector.CONFIG);
    }
}
