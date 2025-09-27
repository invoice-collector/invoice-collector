
import { SketchCollector } from '../../sketchCollector';

export class ExtensisCollector extends SketchCollector {

    static CONFIG = {
        id: "extensis",
        name: "Extensis",
        description: "i18n.collectors.extensis.description",
        version: "0",
        website: "https://secure.extensis.com/loginpage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54665.jpg",
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
        entryUrl: "https://secure.extensis.com/loginpage",
    }

    constructor() {
        super(ExtensisCollector.CONFIG);
    }
}
