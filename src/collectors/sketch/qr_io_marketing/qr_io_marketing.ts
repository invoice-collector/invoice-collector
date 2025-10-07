
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QrIoMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "qr_io_marketing",
        name: "Qr.io Marketing",
        description: "i18n.collectors.qr_io_marketing.description",
        version: "0",
        website: "https://qr.io/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063522.jpg",
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
        entryUrl: "https://qr.io/dashboard/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QrIoMarketingCollector.CONFIG);
    }
}
