
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RheinbahnAboonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "rheinbahn_aboonline",
        name: "Rheinbahn AboOnline",
        description: "i18n.collectors.rheinbahn_aboonline.description",
        version: "0",
        website: "https://aboonline.rheinbahn.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53082.jpg",
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
        loginUrl: "https://aboonline.rheinbahn.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RheinbahnAboonlineCollector.CONFIG);
    }
}
