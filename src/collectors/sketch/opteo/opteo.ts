
import { SketchCollector } from '../../sketchCollector';

export class OpteoCollector extends SketchCollector {

    static CONFIG = {
        id: "opteo",
        name: "Opteo",
        description: "i18n.collectors.opteo.description",
        version: "0",
        website: "https://app.opteo.com/app/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31246.jpg",
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
        entryUrl: "https://app.opteo.com/app/#/login",
    }

    constructor() {
        super(OpteoCollector.CONFIG);
    }
}
