
import { SketchCollector } from '../../sketchCollector';

export class HoneybadgerCollector extends SketchCollector {

    static CONFIG = {
        id: "honeybadger",
        name: "Honeybadger",
        description: "i18n.collectors.honeybadger.description",
        version: "0",
        website: "https://app.honeybadger.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9397.jpg",
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
        entryUrl: "https://app.honeybadger.io/users/sign_in",
    }

    constructor() {
        super(HoneybadgerCollector.CONFIG);
    }
}
