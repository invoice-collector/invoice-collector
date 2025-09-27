
import { SketchCollector } from '../../sketchCollector';

export class OowvCollector extends SketchCollector {

    static CONFIG = {
        id: "oowv",
        name: "OOWV",
        description: "i18n.collectors.oowv.description",
        version: "0",
        website: "https://service.einfach-heimat.de/#/service/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1808180.jpg",
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
        entryUrl: "https://service.einfach-heimat.de/#/service/invoice",
    }

    constructor() {
        super(OowvCollector.CONFIG);
    }
}
