
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeHammCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_hamm",
        name: "Stadtwerke Hamm",
        description: "i18n.collectors.stadtwerke_hamm.description",
        version: "0",
        website: "https://onlineservice.stadtwerke-hamm.de/internetportal/fo/portal/invoiceDetails",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654772.jpg",
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
        entryUrl: "https://onlineservice.stadtwerke-hamm.de/internetportal/fo/portal/invoiceDetails",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeHammCollector.CONFIG);
    }
}
