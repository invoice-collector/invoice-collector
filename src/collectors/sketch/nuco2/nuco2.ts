
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Nuco2Collector extends SketchCollector {

    static CONFIG = {
        id: "nuco2",
        name: "NuCo2",
        description: "i18n.collectors.nuco2.description",
        version: "0",
        website: "https://www.billeriq.com/ebpp/NuCO2/BillPay",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/179851.jpg",
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
        entryUrl: "https://www.billeriq.com/ebpp/NuCO2/BillPay",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Nuco2Collector.CONFIG);
    }
}
