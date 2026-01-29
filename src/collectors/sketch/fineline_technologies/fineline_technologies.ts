
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FinelineTechnologiesCollector extends SketchCollector {

    static CONFIG = {
        id: "fineline_technologies",
        name: "Fineline Technologies",
        description: "i18n.collectors.fineline_technologies.description",
        version: "0",
        website: "https://www.finelineglobal.com/FastTrak/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1295827.jpg",
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
        loginUrl: "https://www.finelineglobal.com/FastTrak/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FinelineTechnologiesCollector.CONFIG);
    }
}
