
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GreenweezCollector extends SketchCollector {

    static CONFIG = {
        id: "greenweez",
        name: "Greenweez",
        description: "i18n.collectors.greenweez.description",
        version: "0",
        website: "https://greenweezfr-prod.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25&sort=issueDate%2CDESC",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4396180.jpg",
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
        loginUrl: "https://greenweezfr-prod.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25&sort=issueDate%2CDESC",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GreenweezCollector.CONFIG);
    }
}
