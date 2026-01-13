
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SkillzCollector extends SketchCollector {

    static CONFIG = {
        id: "skillz",
        name: "Skillz",
        description: "i18n.collectors.skillz.description",
        version: "0",
        website: "https://developers.skillz.com/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2554841.jpg",
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
        loginUrl: "https://developers.skillz.com/statements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SkillzCollector.CONFIG);
    }
}
