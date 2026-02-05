
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DomeinbalieNlCollector extends SketchCollector {

    static CONFIG = {
        id: "domeinbalie_nl",
        name: "Domeinbalie.nl",
        description: "i18n.collectors.domeinbalie_nl.description",
        version: "0",
        website: "https://www.domeinbalie.nl/lounge/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32320.jpg",
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
        loginUrl: "https://www.domeinbalie.nl/lounge/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DomeinbalieNlCollector.CONFIG);
    }
}
