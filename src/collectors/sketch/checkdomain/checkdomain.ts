
import { SketchCollector } from '../../sketchCollector';

export class CheckdomainCollector extends SketchCollector {

    static CONFIG = {
        id: "checkdomain",
        name: "checkdomain",
        description: "i18n.collectors.checkdomain.description",
        version: "0",
        website: "https://www.checkdomain.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/820.jpg",
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
        entryUrl: "https://www.checkdomain.de/login/",
    }

    constructor() {
        super(CheckdomainCollector.CONFIG);
    }
}
