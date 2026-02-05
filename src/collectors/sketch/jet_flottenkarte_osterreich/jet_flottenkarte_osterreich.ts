
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JetFlottenkarteOsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "jet_flottenkarte_osterreich",
        name: "Jet Flottenkarte Osterreich",
        description: "i18n.collectors.jet_flottenkarte_osterreich.description",
        version: "0",
        website: "https://flottenkarte.jet-tankstellen.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2510187.jpg",
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
        loginUrl: "https://flottenkarte.jet-tankstellen.at/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JetFlottenkarteOsterreichCollector.CONFIG);
    }
}
