
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllianceHealthcareDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "alliance_healthcare_deutschland",
        name: "Alliance Healthcare Deutschland",
        description: "i18n.collectors.alliance_healthcare_deutschland.description",
        version: "0",
        website: "https://www.apothekenmanager.de/de/start/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230264.jpg",
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
        loginUrl: "https://www.apothekenmanager.de/de/start/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AllianceHealthcareDeutschlandCollector.CONFIG);
    }
}
