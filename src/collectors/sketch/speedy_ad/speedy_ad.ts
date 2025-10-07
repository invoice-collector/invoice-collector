
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpeedyAdCollector extends SketchCollector {

    static CONFIG = {
        id: "speedy_ad",
        name: "Speedy AD",
        description: "i18n.collectors.speedy_ad.description",
        version: "0",
        website: "https://services.speedy.bg/invoices/?p=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282704.jpg",
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
        entryUrl: "https://services.speedy.bg/invoices/?p=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpeedyAdCollector.CONFIG);
    }
}
