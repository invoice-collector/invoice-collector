
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AuthoredupCollector extends SketchCollector {

    static CONFIG = {
        id: "authoredup",
        name: "AuthoredUp",
        description: "i18n.collectors.authoredup.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1M2I7eCjEccpet9t/live_YWNjdF8xTTJJN2VDakVjY3BldDl0LF9PY1EydXlZWFVwY0FZZXNFWFR0Rk5aYjRPVGpqSUVULDkyNDc4OTUw0200zlZgfnl2?s=il&locale=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2418857.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1M2I7eCjEccpet9t/live_YWNjdF8xTTJJN2VDakVjY3BldDl0LF9PY1EydXlZWFVwY0FZZXNFWFR0Rk5aYjRPVGpqSUVULDkyNDc4OTUw0200zlZgfnl2?s=il&locale=de-DE",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AuthoredupCollector.CONFIG);
    }
}
