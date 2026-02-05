
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GreenStarEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "green_star_energy",
        name: "Green Star Energy",
        description: "i18n.collectors.green_star_energy.description",
        version: "0",
        website: "http://www.mygreenstarenergy.com/My-Energy-World",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8779.jpg",
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
        loginUrl: "http://www.mygreenstarenergy.com/My-Energy-World",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GreenStarEnergyCollector.CONFIG);
    }
}
