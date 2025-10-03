
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HtcIncCollector extends SketchCollector {

    static CONFIG = {
        id: "htc_inc",
        name: "HTC Inc",
        description: "i18n.collectors.htc_inc.description",
        version: "0",
        website: "https://myaccount.htcinc.net/controller/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88531.jpg",
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
        entryUrl: "https://myaccount.htcinc.net/controller/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HtcIncCollector.CONFIG);
    }
}
