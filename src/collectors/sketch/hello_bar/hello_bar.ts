
import { SketchCollector } from '../../sketchCollector';

export class HelloBarCollector extends SketchCollector {

    static CONFIG = {
        id: "hello_bar",
        name: "Hello Bar",
        description: "i18n.collectors.hello_bar.description",
        version: "0",
        website: "https://www.hellobar.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33120.jpg",
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
        entryUrl: "https://www.hellobar.com/users/sign_in",
    }

    constructor() {
        super(HelloBarCollector.CONFIG);
    }
}
