
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BillingsProCollector extends SketchCollector {

    static CONFIG = {
        id: "billings_pro",
        name: "Billings Pro",
        description: "i18n.collectors.billings_pro.description",
        version: "0",
        website: "https://www.marketcircle.com/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42727.jpg",
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
        entryUrl: "https://www.marketcircle.com/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BillingsProCollector.CONFIG);
    }
}
