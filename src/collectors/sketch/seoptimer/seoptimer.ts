
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SeoptimerCollector extends SketchCollector {

    static CONFIG = {
        id: "seoptimer",
        name: "SEoptimer",
        description: "i18n.collectors.seoptimer.description",
        version: "0",
        website: "https://www.seoptimer.com/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/421631.jpg",
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
        entryUrl: "https://www.seoptimer.com/myaccount",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SeoptimerCollector.CONFIG);
    }
}
