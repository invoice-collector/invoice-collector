
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SfrBusinessTeamFixeCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business_team_fixe",
        name: "SFR Business Team (Fixe)",
        description: "i18n.collectors.sfr_business_team_fixe.description",
        version: "0",
        website: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136700.jpg",
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
        entryUrl: "https://extranet.sfrbusinessteam.fr/extranet/servlet/EntrepriseApplicationServlet/ConnexionURL/DiveLoginPage?0",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SfrBusinessTeamFixeCollector.CONFIG);
    }
}
