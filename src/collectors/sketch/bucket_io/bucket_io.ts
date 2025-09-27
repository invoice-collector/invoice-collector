
import { SketchCollector } from '../../sketchCollector';

export class BucketIoCollector extends SketchCollector {

    static CONFIG = {
        id: "bucket_io",
        name: "bucket.io",
        description: "i18n.collectors.bucket_io.description",
        version: "0",
        website: "https://app.bucket.io/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28525.jpg",
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
        entryUrl: "https://app.bucket.io/#/",
    }

    constructor() {
        super(BucketIoCollector.CONFIG);
    }
}
