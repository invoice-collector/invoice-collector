
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IntacctCollector extends SketchCollector {

    static CONFIG = {
        id: "intacct",
        name: "intacct",
        description: "i18n.collectors.intacct.description",
        version: "0",
        website: "https://www.intacct.com/ia/acct/login.phtml?_ga=2.74544722.1779628590.1523427773-399854463.1523427773",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8270.jpg",
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
        loginUrl: "https://www.intacct.com/ia/acct/login.phtml?_ga=2.74544722.1779628590.1523427773-399854463.1523427773",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IntacctCollector.CONFIG);
    }
}
