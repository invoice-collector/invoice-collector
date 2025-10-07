
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HeidelpayCollector extends SketchCollector {

    static CONFIG = {
        id: "heidelpay",
        name: "heidelpay",
        description: "i18n.collectors.heidelpay.description",
        version: "0",
        website: "https://heidelpay.hpcgw.net/hip/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10099.jpg",
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
        entryUrl: "https://heidelpay.hpcgw.net/hip/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HeidelpayCollector.CONFIG);
    }
}
