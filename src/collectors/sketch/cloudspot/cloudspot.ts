
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloudspotCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudspot",
        name: "Cloudspot",
        description: "i18n.collectors.cloudspot.description",
        version: "0",
        website: "https://app.cloudspot.io/accountSettings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480721.jpg",
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
        entryUrl: "https://app.cloudspot.io/accountSettings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudspotCollector.CONFIG);
    }
}
