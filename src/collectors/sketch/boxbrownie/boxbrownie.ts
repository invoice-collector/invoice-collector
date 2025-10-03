
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BoxbrownieCollector extends SketchCollector {

    static CONFIG = {
        id: "boxbrownie",
        name: "BoxBrownie",
        description: "i18n.collectors.boxbrownie.description",
        version: "0",
        website: "https://www.boxbrownie.com/members/payment-invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3104116.jpg",
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
        entryUrl: "https://www.boxbrownie.com/members/payment-invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BoxbrownieCollector.CONFIG);
    }
}
