
import { SketchCollector } from '../../sketchCollector';

export class SocinatorCollector extends SketchCollector {

    static CONFIG = {
        id: "socinator",
        name: "socinator",
        description: "i18n.collectors.socinator.description",
        version: "0",
        website: "https://socinator.com/amember/signup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/545036.jpg",
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
        entryUrl: "https://socinator.com/amember/signup",
    }

    constructor() {
        super(SocinatorCollector.CONFIG);
    }
}
