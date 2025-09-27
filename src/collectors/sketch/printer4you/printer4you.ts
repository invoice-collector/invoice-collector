
import { SketchCollector } from '../../sketchCollector';

export class Printer4youCollector extends SketchCollector {

    static CONFIG = {
        id: "printer4you",
        name: "Printer4you",
        description: "i18n.collectors.printer4you.description",
        version: "0",
        website: "https://www.printer4you.com/de/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/152574.jpg",
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
        entryUrl: "https://www.printer4you.com/de/customer/login",
    }

    constructor() {
        super(Printer4youCollector.CONFIG);
    }
}
