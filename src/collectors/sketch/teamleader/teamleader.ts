
import { SketchCollector } from '../../sketchCollector';

export class TeamleaderCollector extends SketchCollector {

    static CONFIG = {
        id: "teamleader",
        name: "Teamleader",
        description: "i18n.collectors.teamleader.description",
        version: "0",
        website: "https://app.teamleader.eu/?gotologin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25204.jpg",
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
        entryUrl: "https://app.teamleader.eu/?gotologin",
    }

    constructor() {
        super(TeamleaderCollector.CONFIG);
    }
}
