
import { SketchCollector } from '../../sketchCollector';

export class TreditionCollector extends SketchCollector {

    static CONFIG = {
        id: "tredition",
        name: "tredition",
        description: "i18n.collectors.tredition.description",
        version: "0",
        website: "https://my.tredition.com/myaccount/provision/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1305682.jpg",
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
        entryUrl: "https://my.tredition.com/myaccount/provision/overview",
    }

    constructor() {
        super(TreditionCollector.CONFIG);
    }
}
