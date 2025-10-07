
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VivacomCollector extends SketchCollector {

    static CONFIG = {
        id: "vivacom",
        name: "Vivacom",
        description: "i18n.collectors.vivacom.description",
        version: "0",
        website: "https://www.vivacom.bg/online/bg/myvivacom/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282738.jpg",
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
        entryUrl: "https://www.vivacom.bg/online/bg/myvivacom/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VivacomCollector.CONFIG);
    }
}
