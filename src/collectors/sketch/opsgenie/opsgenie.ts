
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpsgenieCollector extends SketchCollector {

    static CONFIG = {
        id: "opsgenie",
        name: "OpsGenie",
        description: "i18n.collectors.opsgenie.description",
        version: "0",
        website: "https://app.opsgenie.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32793.jpg",
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
        entryUrl: "https://app.opsgenie.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpsgenieCollector.CONFIG);
    }
}
