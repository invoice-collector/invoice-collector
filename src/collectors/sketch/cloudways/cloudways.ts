
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloudwaysCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudways",
        name: "CloudWays",
        description: "i18n.collectors.cloudways.description",
        version: "0",
        website: "https://platform.cloudways.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27147.jpg",
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
        entryUrl: "https://platform.cloudways.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudwaysCollector.CONFIG);
    }
}
