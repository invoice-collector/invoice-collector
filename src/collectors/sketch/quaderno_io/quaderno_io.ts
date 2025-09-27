
import { SketchCollector } from '../../sketchCollector';

export class QuadernoIoCollector extends SketchCollector {

    static CONFIG = {
        id: "quaderno_io",
        name: "quaderno.io",
        description: "i18n.collectors.quaderno_io.description",
        version: "0",
        website: "https://quadernoapp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17791.jpg",
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
        entryUrl: "https://quadernoapp.com/login",
    }

    constructor() {
        super(QuadernoIoCollector.CONFIG);
    }
}
