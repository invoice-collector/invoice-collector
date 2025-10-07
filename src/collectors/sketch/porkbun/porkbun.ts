
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PorkbunCollector extends SketchCollector {

    static CONFIG = {
        id: "porkbun",
        name: "porkbun",
        description: "i18n.collectors.porkbun.description",
        version: "0",
        website: "https://porkbun.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/587705.jpg",
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
        entryUrl: "https://porkbun.com/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PorkbunCollector.CONFIG);
    }
}
