
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CitizenCircleCollector extends SketchCollector {

    static CONFIG = {
        id: "citizen_circle",
        name: "Citizen Circle",
        description: "i18n.collectors.citizen_circle.description",
        version: "0",
        website: "https://member.citizencircle.de/mitgliedschaft/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/543152.jpg",
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
        loginUrl: "https://member.citizencircle.de/mitgliedschaft/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CitizenCircleCollector.CONFIG);
    }
}
