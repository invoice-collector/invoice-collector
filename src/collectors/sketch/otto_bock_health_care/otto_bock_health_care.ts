
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OttoBockHealthCareCollector extends SketchCollector {

    static CONFIG = {
        id: "otto_bock_health_care",
        name: "Otto Bock Health Care",
        description: "i18n.collectors.otto_bock_health_care.description",
        version: "0",
        website: "https://www.ottobock.de/downloadcenter/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428741.jpg",
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
        loginUrl: "https://www.ottobock.de/downloadcenter/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OttoBockHealthCareCollector.CONFIG);
    }
}
