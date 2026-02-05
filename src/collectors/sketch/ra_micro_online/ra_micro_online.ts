
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RaMicroOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "ra_micro_online",
        name: "RA-MICRO Online",
        description: "i18n.collectors.ra_micro_online.description",
        version: "0",
        website: "https://www.ra-micro-online.de/net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69435.jpg",
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
        loginUrl: "https://www.ra-micro-online.de/net/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RaMicroOnlineCollector.CONFIG);
    }
}
