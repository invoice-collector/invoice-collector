
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JetFlottenkarteCollector extends SketchCollector {

    static CONFIG = {
        id: "jet_flottenkarte",
        name: "JET Flottenkarte",
        description: "i18n.collectors.jet_flottenkarte.description",
        version: "0",
        website: "https://flottenkarte.jet-tankstellen.de/default.ixsp#{20}",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66577.jpg",
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
        loginUrl: "https://flottenkarte.jet-tankstellen.de/default.ixsp#{20}",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JetFlottenkarteCollector.CONFIG);
    }
}
