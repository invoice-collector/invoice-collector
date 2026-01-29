
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IkkDieInnovationskasseCollector extends SketchCollector {

    static CONFIG = {
        id: "ikk_die_innovationskasse",
        name: "IKK - Die Innovationskasse",
        description: "i18n.collectors.ikk_die_innovationskasse.description",
        version: "0",
        website: "https://data-ikknord.bitmarck.org/Web%20Client/ListDir.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2301834.jpg",
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
        loginUrl: "https://data-ikknord.bitmarck.org/Web%20Client/ListDir.htm",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IkkDieInnovationskasseCollector.CONFIG);
    }
}
