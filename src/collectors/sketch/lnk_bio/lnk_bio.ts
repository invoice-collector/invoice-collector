
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LnkBioCollector extends SketchCollector {

    static CONFIG = {
        id: "lnk_bio",
        name: "Lnk.Bio",
        description: "i18n.collectors.lnk_bio.description",
        version: "0",
        website: "https://lnk.bio/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/787514.jpg",
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
        loginUrl: "https://lnk.bio/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LnkBioCollector.CONFIG);
    }
}
