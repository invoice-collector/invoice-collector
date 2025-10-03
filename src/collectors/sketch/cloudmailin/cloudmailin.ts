
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloudmailinCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudmailin",
        name: "Cloudmailin",
        description: "i18n.collectors.cloudmailin.description",
        version: "0",
        website: "https://www.cloudmailin.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69473.jpg",
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
        entryUrl: "https://www.cloudmailin.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudmailinCollector.CONFIG);
    }
}
