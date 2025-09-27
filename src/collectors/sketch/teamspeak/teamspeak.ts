
import { SketchCollector } from '../../sketchCollector';

export class TeamspeakCollector extends SketchCollector {

    static CONFIG = {
        id: "teamspeak",
        name: "TeamSpeak",
        description: "i18n.collectors.teamspeak.description",
        version: "0",
        website: "https://sales.teamspeakusa.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846114.jpg",
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
        entryUrl: "https://sales.teamspeakusa.com/",
    }

    constructor() {
        super(TeamspeakCollector.CONFIG);
    }
}
