
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrizyCollector extends SketchCollector {

    static CONFIG = {
        id: "brizy",
        name: "Brizy",
        description: "i18n.collectors.brizy.description",
        version: "0",
        website: "https://www.brizy.io/account/member/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1435606.jpg",
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
        entryUrl: "https://www.brizy.io/account/member/payment-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrizyCollector.CONFIG);
    }
}
