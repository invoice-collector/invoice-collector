
import { SketchCollector } from '../../sketchCollector';

export class NakedsslCollector extends SketchCollector {

    static CONFIG = {
        id: "nakedssl",
        name: "NakedSSL",
        description: "i18n.collectors.nakedssl.description",
        version: "0",
        website: "https://app.nakedssl.com/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161945.jpg",
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
        entryUrl: "https://app.nakedssl.com/profile",
    }

    constructor() {
        super(NakedsslCollector.CONFIG);
    }
}
