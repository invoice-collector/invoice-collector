
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CharterCommunicationsCollector extends SketchCollector {

    static CONFIG = {
        id: "charter_communications",
        name: "Charter Communications",
        description: "i18n.collectors.charter_communications.description",
        version: "0",
        website: "https://www.spectrum.net/billing-and-transactions/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8718.jpg",
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
        entryUrl: "https://www.spectrum.net/billing-and-transactions/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CharterCommunicationsCollector.CONFIG);
    }
}
