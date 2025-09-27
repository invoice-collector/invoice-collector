
import { SketchCollector } from '../../sketchCollector';

export class PapertrailCollector extends SketchCollector {

    static CONFIG = {
        id: "papertrail",
        name: "Papertrail",
        description: "i18n.collectors.papertrail.description",
        version: "0",
        website: "https://papertrailapp.com/account/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8999.jpg",
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
        entryUrl: "https://papertrailapp.com/account/purchases",
    }

    constructor() {
        super(PapertrailCollector.CONFIG);
    }
}
