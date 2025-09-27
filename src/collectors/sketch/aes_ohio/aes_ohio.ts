
import { SketchCollector } from '../../sketchCollector';

export class AesOhioCollector extends SketchCollector {

    static CONFIG = {
        id: "aes_ohio",
        name: "AES Ohio",
        description: "i18n.collectors.aes_ohio.description",
        version: "0",
        website: "https://myprofile.aes-ohio.com/Bill/BillHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4203046.jpg",
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
        entryUrl: "https://myprofile.aes-ohio.com/Bill/BillHistory",
    }

    constructor() {
        super(AesOhioCollector.CONFIG);
    }
}
