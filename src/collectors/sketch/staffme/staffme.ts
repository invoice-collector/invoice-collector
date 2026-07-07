
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StaffmeCollector extends SketchCollector {

    static CONFIG = {
        id: "staffme",
        name: "StaffMe",
        description: "i18n.collectors.staffme.description",
        version: "1",
        website: "https://staffme.fr",
        logo: "https://www.staffme.fr/themes/custom/nowjobs/images/logos/staffme.png",
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
        loginUrl: "https://app.staffme-interim.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StaffmeCollector.CONFIG);
    }
}
