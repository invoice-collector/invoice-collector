
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HighMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "high_mobile",
        name: "high-mobile",
        description: "i18n.collectors.high_mobile.description",
        version: "0",
        website: "https://csc.high-mobile.de/high-csc/user/bills/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/421634.jpg",
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
        entryUrl: "https://csc.high-mobile.de/high-csc/user/bills/list",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HighMobileCollector.CONFIG);
    }
}
