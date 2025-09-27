
import { SketchCollector } from '../../sketchCollector';

export class TransloaditCollector extends SketchCollector {

    static CONFIG = {
        id: "transloadit",
        name: "Transloadit",
        description: "i18n.collectors.transloadit.description",
        version: "0",
        website: "https://transloadit.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8602.jpg",
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
        entryUrl: "https://transloadit.com/login/",
    }

    constructor() {
        super(TransloaditCollector.CONFIG);
    }
}
