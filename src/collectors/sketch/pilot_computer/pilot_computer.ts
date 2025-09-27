
import { SketchCollector } from '../../sketchCollector';

export class PilotComputerCollector extends SketchCollector {

    static CONFIG = {
        id: "pilot_computer",
        name: "pilot Computer",
        description: "i18n.collectors.pilot_computer.description",
        version: "0",
        website: "https://shop.pilot-computer.de/index.php/~customerCenter_InvoiceOrderController/start/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216274.jpg",
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
        entryUrl: "https://shop.pilot-computer.de/index.php/~customerCenter_InvoiceOrderController/start/invoice",
    }

    constructor() {
        super(PilotComputerCollector.CONFIG);
    }
}
