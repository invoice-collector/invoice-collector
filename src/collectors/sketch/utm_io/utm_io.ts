
import { SketchCollector } from '../../sketchCollector';

export class UtmIoCollector extends SketchCollector {

    static CONFIG = {
        id: "utm_io",
        name: "utm.io",
        description: "i18n.collectors.utm_io.description",
        version: "0",
        website: "https://app.utm.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640876.jpg",
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
        entryUrl: "https://app.utm.io/login",
    }

    constructor() {
        super(UtmIoCollector.CONFIG);
    }
}
