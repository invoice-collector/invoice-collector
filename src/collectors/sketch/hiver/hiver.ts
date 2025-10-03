
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HiverCollector extends SketchCollector {

    static CONFIG = {
        id: "hiver",
        name: "Hiver",
        description: "i18n.collectors.hiver.description",
        version: "0",
        website: "https://v2.hiverhq.com/account/paymenthistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777331.jpg",
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
        entryUrl: "https://v2.hiverhq.com/account/paymenthistory",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HiverCollector.CONFIG);
    }
}
