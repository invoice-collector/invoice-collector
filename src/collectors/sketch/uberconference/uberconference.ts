
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UberconferenceCollector extends SketchCollector {

    static CONFIG = {
        id: "uberconference",
        name: "UberConference",
        description: "i18n.collectors.uberconference.description",
        version: "0",
        website: "http://www.uberconference.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47162.jpg",
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
        entryUrl: "http://www.uberconference.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberconferenceCollector.CONFIG);
    }
}
