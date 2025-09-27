
import { SketchCollector } from '../../sketchCollector';

export class SendcloudNlCollector extends SketchCollector {

    static CONFIG = {
        id: "sendcloud_nl",
        name: "SendCloud.nl",
        description: "i18n.collectors.sendcloud_nl.description",
        version: "0",
        website: "https://app.sendcloud.com/v2/settings/financial/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24458.jpg",
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
        entryUrl: "https://app.sendcloud.com/v2/settings/financial/invoices/",
    }

    constructor() {
        super(SendcloudNlCollector.CONFIG);
    }
}
