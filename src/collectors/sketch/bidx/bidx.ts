
import { SketchCollector } from '../../sketchCollector';

export class BidxCollector extends SketchCollector {

    static CONFIG = {
        id: "bidx",
        name: "BidX",
        description: "i18n.collectors.bidx.description",
        version: "0",
        website: "https://app.bidx-tool.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45917.jpg",
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
        entryUrl: "https://app.bidx-tool.com/",
    }

    constructor() {
        super(BidxCollector.CONFIG);
    }
}
