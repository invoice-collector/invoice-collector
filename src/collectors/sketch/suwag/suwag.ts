
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SuwagCollector extends SketchCollector {

    static CONFIG = {
        id: "suwag",
        name: "Suwag",
        description: "i18n.collectors.suwag.description",
        version: "0",
        website: "https://www.suewag.de/privatkunden/kundenvorteile/kundenportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90714.jpg",
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
        loginUrl: "https://www.suewag.de/privatkunden/kundenvorteile/kundenportal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SuwagCollector.CONFIG);
    }
}
