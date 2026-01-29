
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaperClubCollector extends SketchCollector {

    static CONFIG = {
        id: "paper_club",
        name: "Paper Club",
        description: "i18n.collectors.paper_club.description",
        version: "0",
        website: "https://app.paper.club/annonceur/commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2449928.jpg",
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
        loginUrl: "https://app.paper.club/annonceur/commandes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PaperClubCollector.CONFIG);
    }
}
