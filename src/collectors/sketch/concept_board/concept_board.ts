
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConceptBoardCollector extends SketchCollector {

    static CONFIG = {
        id: "concept_board",
        name: "Concept Board",
        description: "i18n.collectors.concept_board.description",
        version: "0",
        website: "https://app.conceptboard.com/login-redirect",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034269.jpg",
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
        loginUrl: "https://app.conceptboard.com/login-redirect",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConceptBoardCollector.CONFIG);
    }
}
