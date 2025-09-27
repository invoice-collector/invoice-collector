
import { SketchCollector } from '../../sketchCollector';

export class FastlyCollector extends SketchCollector {

    static CONFIG = {
        id: "fastly",
        name: "fastly",
        description: "i18n.collectors.fastly.description",
        version: "0",
        website: "https://manage.fastly.com/authentication/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54067.jpg",
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
        entryUrl: "https://manage.fastly.com/authentication/sign-in",
    }

    constructor() {
        super(FastlyCollector.CONFIG);
    }
}
