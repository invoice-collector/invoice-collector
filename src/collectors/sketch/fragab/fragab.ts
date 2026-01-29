
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FragabCollector extends SketchCollector {

    static CONFIG = {
        id: "fragab",
        name: "FragAB",
        description: "i18n.collectors.fragab.description",
        version: "0",
        website: "https://fragab.de/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2987727.jpg",
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
        loginUrl: "https://fragab.de/download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FragabCollector.CONFIG);
    }
}
