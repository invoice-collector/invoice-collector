
import { SketchCollector } from '../../sketchCollector';

export class QrCodeGeneratorCollector extends SketchCollector {

    static CONFIG = {
        id: "qr_code_generator",
        name: "QR Code Generator",
        description: "i18n.collectors.qr_code_generator.description",
        version: "0",
        website: "https://app.qr-code-generator.com/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144289.jpg",
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
        entryUrl: "https://app.qr-code-generator.com/billing/",
    }

    constructor() {
        super(QrCodeGeneratorCollector.CONFIG);
    }
}
