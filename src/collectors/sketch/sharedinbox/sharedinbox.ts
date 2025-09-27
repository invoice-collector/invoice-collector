
import { SketchCollector } from '../../sketchCollector';

export class SharedinboxCollector extends SketchCollector {

    static CONFIG = {
        id: "sharedinbox",
        name: "Sharedinbox",
        description: "i18n.collectors.sharedinbox.description",
        version: "0",
        website: "https://app.sharedinbox.co/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645389.jpg",
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
        entryUrl: "https://app.sharedinbox.co/billing",
    }

    constructor() {
        super(SharedinboxCollector.CONFIG);
    }
}
