
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Cloud9Collector extends SketchCollector {

    static CONFIG = {
        id: "cloud9",
        name: "Cloud9",
        description: "i18n.collectors.cloud9.description",
        version: "0",
        website: "https://c9.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15070.jpg",
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
        entryUrl: "https://c9.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Cloud9Collector.CONFIG);
    }
}
