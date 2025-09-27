
import { SketchCollector } from '../../sketchCollector';

export class QrCodeCreatorCollector extends SketchCollector {

    static CONFIG = {
        id: "qr_code_creator",
        name: "Qr Code Creator",
        description: "i18n.collectors.qr_code_creator.description",
        version: "0",
        website: "https://qrcodecreator.com/de/dashboard/user/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4679932.jpg",
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
        entryUrl: "https://qrcodecreator.com/de/dashboard/user/billing",
    }

    constructor() {
        super(QrCodeCreatorCollector.CONFIG);
    }
}
