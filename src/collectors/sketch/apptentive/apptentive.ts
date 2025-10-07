
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApptentiveCollector extends SketchCollector {

    static CONFIG = {
        id: "apptentive",
        name: "Apptentive",
        description: "i18n.collectors.apptentive.description",
        version: "0",
        website: "https://be.apptentive.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7295.jpg",
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
        entryUrl: "https://be.apptentive.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApptentiveCollector.CONFIG);
    }
}
