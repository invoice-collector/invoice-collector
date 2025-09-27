
import { SketchCollector } from '../../sketchCollector';

export class GothruCollector extends SketchCollector {

    static CONFIG = {
        id: "gothru",
        name: "GoThru",
        description: "i18n.collectors.gothru.description",
        version: "0",
        website: "https://gothru.co/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862695.jpg",
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
        entryUrl: "https://gothru.co/invoices.php",
    }

    constructor() {
        super(GothruCollector.CONFIG);
    }
}
