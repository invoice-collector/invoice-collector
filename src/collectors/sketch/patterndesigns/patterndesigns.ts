
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PatterndesignsCollector extends SketchCollector {

    static CONFIG = {
        id: "patterndesigns",
        name: "patterndesigns",
        description: "i18n.collectors.patterndesigns.description",
        version: "0",
        website: "https://www.patterndesigns.com/de#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211138.jpg",
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
        loginUrl: "https://www.patterndesigns.com/de#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PatterndesignsCollector.CONFIG);
    }
}
