
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PaybyphoneBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "paybyphone_business",
        name: "PAYBYPHONE Business",
        description: "i18n.collectors.paybyphone_business.description",
        version: "0",
        website: "https://business.paybyphone.com/monthly-statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022143.jpg",
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
        entryUrl: "https://business.paybyphone.com/monthly-statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaybyphoneBusinessCollector.CONFIG);
    }
}
