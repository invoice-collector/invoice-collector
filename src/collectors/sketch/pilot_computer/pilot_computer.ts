
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PilotComputerCollector extends SketchCollector {

    static CONFIG = {
        id: "pilot_computer",
        name: "pilot Computer",
        description: "i18n.collectors.pilot_computer.description",
        version: "0",
        website: "https://shop.pilot-computer.de/index.php/~customerCenter_InvoiceOrderController/start/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216274.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://shop.pilot-computer.de/index.php/~customerCenter_InvoiceOrderController/start/invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PilotComputerCollector.CONFIG);
    }
}
