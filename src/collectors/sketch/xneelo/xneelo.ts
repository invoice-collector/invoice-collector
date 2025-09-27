
import { SketchCollector } from '../../sketchCollector';

export class XneeloCollector extends SketchCollector {

    static CONFIG = {
        id: "xneelo",
        name: "xneelo",
        description: "i18n.collectors.xneelo.description",
        version: "0",
        website: "https://xneelo.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740280.jpg",
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
        entryUrl: "https://xneelo.co.za/",
    }

    constructor() {
        super(XneeloCollector.CONFIG);
    }
}
