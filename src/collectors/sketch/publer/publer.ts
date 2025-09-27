
import { SketchCollector } from '../../sketchCollector';

export class PublerCollector extends SketchCollector {

    static CONFIG = {
        id: "publer",
        name: "Publer",
        description: "i18n.collectors.publer.description",
        version: "0",
        website: "https://publer.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060572.jpg",
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
        entryUrl: "https://publer.io/users/sign_in",
    }

    constructor() {
        super(PublerCollector.CONFIG);
    }
}
