
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BlogmissionAdvertiserCollector extends SketchCollector {

    static CONFIG = {
        id: "blogmission_advertiser",
        name: "blogmission - Advertiser",
        description: "i18n.collectors.blogmission_advertiser.description",
        version: "0",
        website: "https://blogmission.com/advertiser/guthaben",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102635.jpg",
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
        entryUrl: "https://blogmission.com/advertiser/guthaben",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BlogmissionAdvertiserCollector.CONFIG);
    }
}
