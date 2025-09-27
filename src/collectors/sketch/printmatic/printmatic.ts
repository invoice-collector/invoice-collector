
import { SketchCollector } from '../../sketchCollector';

export class PrintmaticCollector extends SketchCollector {

    static CONFIG = {
        id: "printmatic",
        name: "PrintMatic",
        description: "i18n.collectors.printmatic.description",
        version: "0",
        website: "https://www.printmatic.de/backend/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/691686.jpg",
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
        entryUrl: "https://www.printmatic.de/backend/",
    }

    constructor() {
        super(PrintmaticCollector.CONFIG);
    }
}
