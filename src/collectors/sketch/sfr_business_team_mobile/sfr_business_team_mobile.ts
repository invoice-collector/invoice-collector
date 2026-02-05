
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SfrBusinessTeamMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business_team_mobile",
        name: "SFR Business Team (Mobile)",
        description: "i18n.collectors.sfr_business_team_mobile.description",
        version: "0",
        website: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?1",
        logo: "https://static.s-sfr.fr/assets/logos/SFR_Business.svg",
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
        loginUrl: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SfrBusinessTeamMobileCollector.CONFIG);
    }
}
