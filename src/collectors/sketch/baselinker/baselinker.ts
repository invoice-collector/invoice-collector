
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaselinkerCollector extends SketchCollector {

    static CONFIG = {
        id: "baselinker",
        name: "Baselinker",
        description: "i18n.collectors.baselinker.description",
        version: "0",
        website: "https://panel-e.baselinker.com/other_payments.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022968.jpg",
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
        entryUrl: "https://panel-e.baselinker.com/other_payments.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaselinkerCollector.CONFIG);
    }
}
