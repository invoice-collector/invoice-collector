
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpusEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "opus_energy",
        name: "Opus Energy",
        description: "i18n.collectors.opus_energy.description",
        version: "0",
        website: "https://my.opusenergy.com/login?ReturnUrl=https://my.opusenergy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9332.jpg",
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
        loginUrl: "https://my.opusenergy.com/login?ReturnUrl=https://my.opusenergy.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OpusEnergyCollector.CONFIG);
    }
}
