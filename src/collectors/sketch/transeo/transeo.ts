
import { SketchCollector } from '../../sketchCollector';

export class TranseoCollector extends SketchCollector {

    static CONFIG = {
        id: "transeo",
        name: "TRANSEO",
        description: "i18n.collectors.transeo.description",
        version: "0",
        website: "https://app.transeo.io/sign/in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/782561.jpg",
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
        entryUrl: "https://app.transeo.io/sign/in",
    }

    constructor() {
        super(TranseoCollector.CONFIG);
    }
}
