
import { SketchCollector } from '../../sketchCollector';

export class TimifyCollector extends SketchCollector {

    static CONFIG = {
        id: "timify",
        name: "TIMIFY",
        description: "i18n.collectors.timify.description",
        version: "0",
        website: "https://app-de.timify.com/#/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46537.jpg",
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
        entryUrl: "https://app-de.timify.com/#/auth/login",
    }

    constructor() {
        super(TimifyCollector.CONFIG);
    }
}
