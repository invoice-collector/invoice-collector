
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StihlB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "stihl_b2b",
        name: "Stihl B2B",
        description: "i18n.collectors.stihl_b2b.description",
        version: "0",
        website: "https://stihl.logistics-mall.com/group/stihl-rechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378385.jpg",
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
        loginUrl: "https://stihl.logistics-mall.com/group/stihl-rechnung",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StihlB2bCollector.CONFIG);
    }
}
