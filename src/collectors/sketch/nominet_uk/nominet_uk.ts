
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NominetUkCollector extends SketchCollector {

    static CONFIG = {
        id: "nominet_uk",
        name: "Nominet UK",
        description: "i18n.collectors.nominet_uk.description",
        version: "0",
        website: "https://secure.nominet.org.uk/account/credit/online-payments.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778900.jpg",
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
        loginUrl: "https://secure.nominet.org.uk/account/credit/online-payments.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NominetUkCollector.CONFIG);
    }
}
