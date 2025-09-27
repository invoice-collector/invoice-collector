
import { SketchCollector } from '../../sketchCollector';

export class EnzuzoCollector extends SketchCollector {

    static CONFIG = {
        id: "enzuzo",
        name: "Enzuzo",
        description: "i18n.collectors.enzuzo.description",
        version: "0",
        website: "https://app.enzuzo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181360.jpg",
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
        entryUrl: "https://app.enzuzo.com/login",
    }

    constructor() {
        super(EnzuzoCollector.CONFIG);
    }
}
