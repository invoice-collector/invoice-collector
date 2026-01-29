
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BpmLuxCollector extends SketchCollector {

    static CONFIG = {
        id: "bpm_lux",
        name: "BPM Lux",
        description: "i18n.collectors.bpm_lux.description",
        version: "0",
        website: "https://www.bpm-lux.com/mybpm/#account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/152276.jpg",
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
        loginUrl: "https://www.bpm-lux.com/mybpm/#account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BpmLuxCollector.CONFIG);
    }
}
