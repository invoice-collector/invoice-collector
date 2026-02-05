
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RhenusOfficeSystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "rhenus_office_systems",
        name: "Rhenus Office Systems",
        description: "i18n.collectors.rhenus_office_systems.description",
        version: "0",
        website: "https://www.aktenvernichtung.de/race-kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553008.jpg",
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
        loginUrl: "https://www.aktenvernichtung.de/race-kundenportal/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RhenusOfficeSystemsCollector.CONFIG);
    }
}
