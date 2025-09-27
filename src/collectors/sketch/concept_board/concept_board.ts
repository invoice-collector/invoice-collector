
import { SketchCollector } from '../../sketchCollector';

export class ConceptBoardCollector extends SketchCollector {

    static CONFIG = {
        id: "concept_board",
        name: "Concept Board",
        description: "i18n.collectors.concept_board.description",
        version: "0",
        website: "https://app.conceptboard.com/login-redirect",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034269.jpg",
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
        entryUrl: "https://app.conceptboard.com/login-redirect",
    }

    constructor() {
        super(ConceptBoardCollector.CONFIG);
    }
}
