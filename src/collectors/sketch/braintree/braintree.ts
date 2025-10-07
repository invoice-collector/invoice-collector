
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BraintreeCollector extends SketchCollector {

    static CONFIG = {
        id: "braintree",
        name: "Braintree",
        description: "i18n.collectors.braintree.description",
        version: "0",
        website: "https://www.braintreegateway.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8615.jpg",
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
        entryUrl: "https://www.braintreegateway.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BraintreeCollector.CONFIG);
    }
}
