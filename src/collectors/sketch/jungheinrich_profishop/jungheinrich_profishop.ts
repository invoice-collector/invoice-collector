
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JungheinrichProfishopCollector extends SketchCollector {

    static CONFIG = {
        id: "jungheinrich_profishop",
        name: "Jungheinrich ProfiShop",
        description: "i18n.collectors.jungheinrich_profishop.description",
        version: "0",
        website: "https://www.jh-profishop.de/?gclid=EAIaIQobChMI-aO4gJT6_gIVSvCyCh0hZgo5EAAYAiAAEgJxR_D_BwE&gclsrc=aw.ds",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1932188.jpg",
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
        loginUrl: "https://www.jh-profishop.de/?gclid=EAIaIQobChMI-aO4gJT6_gIVSvCyCh0hZgo5EAAYAiAAEgJxR_D_BwE&gclsrc=aw.ds",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JungheinrichProfishopCollector.CONFIG);
    }
}
