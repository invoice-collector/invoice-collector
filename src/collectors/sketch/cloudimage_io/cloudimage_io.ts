
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CloudimageIoCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudimage_io",
        name: "cloudimage.io",
        description: "i18n.collectors.cloudimage_io.description",
        version: "0",
        website: "https://admin.cloudimage.io/account/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488450.jpg",
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
        entryUrl: "https://admin.cloudimage.io/account/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CloudimageIoCollector.CONFIG);
    }
}
