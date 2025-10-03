
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VonageUkCollector extends SketchCollector {

    static CONFIG = {
        id: "vonage_uk",
        name: "Vonage UK",
        description: "i18n.collectors.vonage_uk.description",
        version: "0",
        website: "https://secure.vonage.co.uk/account/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91963.jpg",
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
        entryUrl: "https://secure.vonage.co.uk/account/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VonageUkCollector.CONFIG);
    }
}
