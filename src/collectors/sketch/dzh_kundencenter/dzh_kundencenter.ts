
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DzhKundencenterCollector extends SketchCollector {

    static CONFIG = {
        id: "dzh_kundencenter",
        name: "DZH Kundencenter",
        description: "i18n.collectors.dzh_kundencenter.description",
        version: "0",
        website: "https://kundencenter.dzh-online.de/redirect.ac",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/573559.jpg",
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
        loginUrl: "https://kundencenter.dzh-online.de/redirect.ac",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DzhKundencenterCollector.CONFIG);
    }
}
