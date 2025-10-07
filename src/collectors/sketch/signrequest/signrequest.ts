
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SignrequestCollector extends SketchCollector {

    static CONFIG = {
        id: "signrequest",
        name: "Signrequest",
        description: "i18n.collectors.signrequest.description",
        version: "0",
        website: "https://signrequest.com/#/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/98914.jpg",
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
        entryUrl: "https://signrequest.com/#/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SignrequestCollector.CONFIG);
    }
}
