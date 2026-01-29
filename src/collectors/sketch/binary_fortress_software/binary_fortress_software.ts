
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BinaryFortressSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "binary_fortress_software",
        name: "Binary Fortress Software",
        description: "i18n.collectors.binary_fortress_software.description",
        version: "0",
        website: "https://www.binaryfortress.com/Account/Login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/743273.jpg",
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
        loginUrl: "https://www.binaryfortress.com/Account/Login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BinaryFortressSoftwareCollector.CONFIG);
    }
}
