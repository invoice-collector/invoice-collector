
import { SketchCollector } from '../../sketchCollector';

export class TeamstromCollector extends SketchCollector {

    static CONFIG = {
        id: "teamstrom",
        name: "Teamstrom",
        description: "i18n.collectors.teamstrom.description",
        version: "0",
        website: "https://portal.teamstrom.de/bkp/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367453.jpg",
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
        entryUrl: "https://portal.teamstrom.de/bkp/rechnungen",
    }

    constructor() {
        super(TeamstromCollector.CONFIG);
    }
}
