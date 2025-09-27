
import { SketchCollector } from '../../sketchCollector';

export class PrintoclockCollector extends SketchCollector {

    static CONFIG = {
        id: "printoclock",
        name: "Printoclock",
        description: "i18n.collectors.printoclock.description",
        version: "0",
        website: "https://www.printoclock.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122780.jpg",
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
        entryUrl: "https://www.printoclock.com/",
    }

    constructor() {
        super(PrintoclockCollector.CONFIG);
    }
}
