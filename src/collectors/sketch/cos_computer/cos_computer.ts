
import { SketchCollector } from '../../sketchCollector';

export class CosComputerCollector extends SketchCollector {

    static CONFIG = {
        id: "cos_computer",
        name: "COS Computer",
        description: "i18n.collectors.cos_computer.description",
        version: "0",
        website: "https://shop.cos-computer.com/index.php/~customerCenter_InvoiceOrderController/start/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778936.jpg",
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
        entryUrl: "https://shop.cos-computer.com/index.php/~customerCenter_InvoiceOrderController/start/invoice",
    }

    constructor() {
        super(CosComputerCollector.CONFIG);
    }
}
