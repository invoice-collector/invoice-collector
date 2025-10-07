
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SendsparkCollector extends SketchCollector {

    static CONFIG = {
        id: "sendspark",
        name: "Sendspark",
        description: "i18n.collectors.sendspark.description",
        version: "0",
        website: "https://sendspark.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203683.jpg",
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
        entryUrl: "https://sendspark.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SendsparkCollector.CONFIG);
    }
}
