
import { SketchCollector } from '../../sketchCollector';

export class PrintusDeCollector extends SketchCollector {

    static CONFIG = {
        id: "printus_de",
        name: "Printus.de",
        description: "i18n.collectors.printus_de.description",
        version: "0",
        website: "https://www.printus.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3607.jpg",
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
        entryUrl: "https://www.printus.de/login",
    }

    constructor() {
        super(PrintusDeCollector.CONFIG);
    }
}
