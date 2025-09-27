
import { SketchCollector } from '../../sketchCollector';

export class SfrBusinessTeamMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business_team_mobile",
        name: "SFR Business Team (Mobile)",
        description: "i18n.collectors.sfr_business_team_mobile.description",
        version: "0",
        website: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136697.jpg",
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
        entryUrl: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?1",
    }

    constructor() {
        super(SfrBusinessTeamMobileCollector.CONFIG);
    }
}
