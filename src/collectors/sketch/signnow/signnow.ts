
import { SketchCollector } from '../../sketchCollector';

export class SignnowCollector extends SketchCollector {

    static CONFIG = {
        id: "signnow",
        name: "SignNow",
        description: "i18n.collectors.signnow.description",
        version: "0",
        website: "https://snseats.signnow.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9416.jpg",
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
        entryUrl: "https://snseats.signnow.com/login",
    }

    constructor() {
        super(SignnowCollector.CONFIG);
    }
}
