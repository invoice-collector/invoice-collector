
import { SketchCollector } from '../../sketchCollector';

export class FSecureCollector extends SketchCollector {

    static CONFIG = {
        id: "f_secure",
        name: "F-Secure",
        description: "i18n.collectors.f_secure.description",
        version: "0",
        website: "https://www.f-secure.com/en/home/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035304.jpg",
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
        entryUrl: "https://www.f-secure.com/en/home/login",
    }

    constructor() {
        super(FSecureCollector.CONFIG);
    }
}
