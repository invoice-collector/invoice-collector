
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeamGermanyEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "team_germany_energie",
        name: "Team Germany Energie",
        description: "i18n.collectors.team_germany_energie.description",
        version: "0",
        website: "https://vertriebspartner.teamgermany.de/provisionen/abrechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761294.jpg",
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
        loginUrl: "https://vertriebspartner.teamgermany.de/provisionen/abrechnungen/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TeamGermanyEnergieCollector.CONFIG);
    }
}
