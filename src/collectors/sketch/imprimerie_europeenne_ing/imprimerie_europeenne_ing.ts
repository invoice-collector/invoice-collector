
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ImprimerieEuropeenneIngCollector extends SketchCollector {

    static CONFIG = {
        id: "imprimerie_europeenne_ing",
        name: "imprimerie europeenne (ING)",
        description: "i18n.collectors.imprimerie_europeenne_ing.description",
        version: "0",
        website: "https://www.imprimerie-europeenne.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1445460.jpg",
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
        loginUrl: "https://www.imprimerie-europeenne.com/account/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImprimerieEuropeenneIngCollector.CONFIG);
    }
}
