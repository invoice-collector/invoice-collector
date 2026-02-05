
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeSchwerinCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_schwerin",
        name: "Stadtwerke Schwerin",
        description: "i18n.collectors.stadtwerke_schwerin.description",
        version: "0",
        website: "https://kundenportal.swsn.de/powercommerce/swsn/fo/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8319.jpg",
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
        loginUrl: "https://kundenportal.swsn.de/powercommerce/swsn/fo/portal/start",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeSchwerinCollector.CONFIG);
    }
}
