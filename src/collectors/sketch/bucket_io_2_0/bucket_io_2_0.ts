
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BucketIo20Collector extends SketchCollector {

    static CONFIG = {
        id: "bucket_io_2_0",
        name: "bucket.io 2.0",
        description: "i18n.collectors.bucket_io_2_0.description",
        version: "0",
        website: "https://app2.bucket.io/account/plan-management",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534504.jpg",
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
        loginUrl: "https://app2.bucket.io/account/plan-management",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BucketIo20Collector.CONFIG);
    }
}
