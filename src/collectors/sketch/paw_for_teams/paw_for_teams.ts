
import { SketchCollector } from '../../sketchCollector';

export class PawForTeamsCollector extends SketchCollector {

    static CONFIG = {
        id: "paw_for_teams",
        name: "Paw for Teams",
        description: "i18n.collectors.paw_for_teams.description",
        version: "0",
        website: "https://paw.cloud/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20988.jpg",
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
        entryUrl: "https://paw.cloud/account/login",
    }

    constructor() {
        super(PawForTeamsCollector.CONFIG);
    }
}
