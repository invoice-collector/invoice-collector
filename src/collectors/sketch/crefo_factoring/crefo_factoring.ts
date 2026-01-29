
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrefoFactoringCollector extends SketchCollector {

    static CONFIG = {
        id: "crefo_factoring",
        name: "Crefo Factoring",
        description: "i18n.collectors.crefo_factoring.description",
        version: "0",
        website: "https://online.crefo-factoring.de/firstlogin.do;jsessionid=6AB0E64A11A325479003FDB743435D82",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31078.jpg",
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
        loginUrl: "https://online.crefo-factoring.de/firstlogin.do;jsessionid=6AB0E64A11A325479003FDB743435D82",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CrefoFactoringCollector.CONFIG);
    }
}
