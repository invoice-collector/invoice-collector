
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CrefoPayCollector extends SketchCollector {

    static CONFIG = {
        id: "crefo_pay",
        name: "Crefo Pay",
        description: "i18n.collectors.crefo_pay.description",
        version: "0",
        website: "https://service.crefopay.de/msa3/#/authorized/reporting/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881819.jpg",
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
        loginUrl: "https://service.crefopay.de/msa3/#/authorized/reporting/reports",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CrefoPayCollector.CONFIG);
    }
}
