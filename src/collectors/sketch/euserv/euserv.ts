
import { SketchCollector } from '../../sketchCollector';

export class EuservCollector extends SketchCollector {

    static CONFIG = {
        id: "euserv",
        name: "EuServ",
        description: "i18n.collectors.euserv.description",
        version: "0",
        website: "https://support.euserv.com/index.iphp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14292.jpg",
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
        entryUrl: "https://support.euserv.com/index.iphp",
    }

    constructor() {
        super(EuservCollector.CONFIG);
    }
}
