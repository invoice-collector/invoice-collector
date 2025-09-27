
import { SketchCollector } from '../../sketchCollector';

export class BigdatacloudCollector extends SketchCollector {

    static CONFIG = {
        id: "bigdatacloud",
        name: "BIGDATACLOUD",
        description: "i18n.collectors.bigdatacloud.description",
        version: "0",
        website: "https://billing.stripe.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1754247.jpg",
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
        entryUrl: "https://billing.stripe.com/",
    }

    constructor() {
        super(BigdatacloudCollector.CONFIG);
    }
}
