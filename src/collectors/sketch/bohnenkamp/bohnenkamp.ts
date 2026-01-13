
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BohnenkampCollector extends SketchCollector {

    static CONFIG = {
        id: "bohnenkamp",
        name: "Bohnenkamp",
        description: "i18n.collectors.bohnenkamp.description",
        version: "0",
        website: "https://shop.bohnenkamp.de/invoicehistory/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175541.jpg",
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
        loginUrl: "https://shop.bohnenkamp.de/invoicehistory/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BohnenkampCollector.CONFIG);
    }
}
