
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RheinbahnAboonlineBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "rheinbahn_aboonline_business",
        name: "Rheinbahn AboOnline Business",
        description: "i18n.collectors.rheinbahn_aboonline_business.description",
        version: "0",
        website: "https://aboonline.rheinbahn.de/en/company/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1331148.jpg",
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
        loginUrl: "https://aboonline.rheinbahn.de/en/company/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RheinbahnAboonlineBusinessCollector.CONFIG);
    }
}
