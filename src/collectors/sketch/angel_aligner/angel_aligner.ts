
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AngelAlignerCollector extends SketchCollector {

    static CONFIG = {
        id: "angel_aligner",
        name: "Angel Aligner",
        description: "i18n.collectors.angel_aligner.description",
        version: "0",
        website: "https://payments.angelalign.com/ecp/?language=de#/paid/detail",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4439308.jpg",
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
        loginUrl: "https://payments.angelalign.com/ecp/?language=de#/paid/detail",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AngelAlignerCollector.CONFIG);
    }
}
