
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HonorarkonzeptCollector extends SketchCollector {

    static CONFIG = {
        id: "honorarkonzept",
        name: "Honorarkonzept",
        description: "i18n.collectors.honorarkonzept.description",
        version: "0",
        website: "https://fortuna.honorarkonzept.de/dashboard/#/mailbox/berater",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/743827.jpg",
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
        entryUrl: "https://fortuna.honorarkonzept.de/dashboard/#/mailbox/berater",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HonorarkonzeptCollector.CONFIG);
    }
}
