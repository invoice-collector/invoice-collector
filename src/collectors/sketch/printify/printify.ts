
import { SketchCollector } from '../../sketchCollector';

export class PrintifyCollector extends SketchCollector {

    static CONFIG = {
        id: "printify",
        name: "Printify",
        description: "i18n.collectors.printify.description",
        version: "0",
        website: "https://printify.com/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/709953.jpg",
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
        entryUrl: "https://printify.com/app/login",
    }

    constructor() {
        super(PrintifyCollector.CONFIG);
    }
}
