
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PfeifferAndMayCollector extends SketchCollector {

    static CONFIG = {
        id: "pfeiffer_and_may",
        name: "PFEIFFER & MAY",
        description: "i18n.collectors.pfeiffer_and_may.description",
        version: "0",
        website: "http://www.pfeiffer-may.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82362.jpg",
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
        entryUrl: "http://www.pfeiffer-may.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PfeifferAndMayCollector.CONFIG);
    }
}
