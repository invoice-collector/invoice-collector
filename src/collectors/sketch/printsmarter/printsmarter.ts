
import { SketchCollector } from '../../sketchCollector';

export class PrintsmarterCollector extends SketchCollector {

    static CONFIG = {
        id: "printsmarter",
        name: "Printsmarter",
        description: "i18n.collectors.printsmarter.description",
        version: "0",
        website: "https://www.printsmarter.de/mein-benutzerkonto/bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153984.jpg",
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
        entryUrl: "https://www.printsmarter.de/mein-benutzerkonto/bestellungen",
    }

    constructor() {
        super(PrintsmarterCollector.CONFIG);
    }
}
