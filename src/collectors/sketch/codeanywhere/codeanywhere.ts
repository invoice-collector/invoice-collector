
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CodeanywhereCollector extends SketchCollector {

    static CONFIG = {
        id: "codeanywhere",
        name: "Codeanywhere",
        description: "i18n.collectors.codeanywhere.description",
        version: "0",
        website: "http://www.codeanywhere.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52300.jpg",
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
        loginUrl: "http://www.codeanywhere.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CodeanywhereCollector.CONFIG);
    }
}
