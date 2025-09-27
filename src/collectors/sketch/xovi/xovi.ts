
import { SketchCollector } from '../../sketchCollector';

export class XoviCollector extends SketchCollector {

    static CONFIG = {
        id: "xovi",
        name: "Xovi",
        description: "i18n.collectors.xovi.description",
        version: "0",
        website: "https://suite.xovi.net/user/login?redirect=%2Faccount%2Finvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2854.jpg",
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
        entryUrl: "https://suite.xovi.net/user/login?redirect=%2Faccount%2Finvoices",
    }

    constructor() {
        super(XoviCollector.CONFIG);
    }
}
