
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SemrushCollector extends SketchCollector {

    static CONFIG = {
        id: "semrush",
        name: "SEMrush",
        description: "i18n.collectors.semrush.description",
        version: "0",
        website: "https://www.semrush.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7124.jpg",
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
        loginUrl: "https://www.semrush.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SemrushCollector.CONFIG);
    }
}
