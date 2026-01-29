
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LindyCollector extends SketchCollector {

    static CONFIG = {
        id: "lindy",
        name: "Lindy",
        description: "i18n.collectors.lindy.description",
        version: "0",
        website: "https://www.lindy.fr/websale8/?Ctx=%257bver%252f8%252fver%257d%257bst%252f407%252fst%257d%257bcmd%252f1%252fcmd%257d%257bm%252fwebsale%252fm%257d%257bs%252fld0101%252fs%257d%257bl%252fld030103%252fl%257d%257bssl%252fx%252fssl%257d%257bmd5%252fc6e4ec3ceec8",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/514906.jpg",
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
        loginUrl: "https://www.lindy.fr/websale8/?Ctx=%257bver%252f8%252fver%257d%257bst%252f407%252fst%257d%257bcmd%252f1%252fcmd%257d%257bm%252fwebsale%252fm%257d%257bs%252fld0101%252fs%257d%257bl%252fld030103%252fl%257d%257bssl%252fx%252fssl%257d%257bmd5%252fc6e4ec3ceec8",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LindyCollector.CONFIG);
    }
}
