
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EkeystoneCollector extends SketchCollector {

    static CONFIG = {
        id: "ekeystone",
        name: "eKeystone",
        description: "i18n.collectors.ekeystone.description",
        version: "0",
        website: "https://wwwsc.ekeystone.com/account-center/invoices-returns",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4610144.jpg",
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
        loginUrl: "https://wwwsc.ekeystone.com/account-center/invoices-returns",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EkeystoneCollector.CONFIG);
    }
}
