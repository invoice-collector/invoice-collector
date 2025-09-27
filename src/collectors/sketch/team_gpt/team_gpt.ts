
import { SketchCollector } from '../../sketchCollector';

export class TeamGptCollector extends SketchCollector {

    static CONFIG = {
        id: "team_gpt",
        name: "Team-GPT",
        description: "i18n.collectors.team_gpt.description",
        version: "0",
        website: "https://chat.team-gpt.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2975189.jpg",
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
        entryUrl: "https://chat.team-gpt.com/",
    }

    constructor() {
        super(TeamGptCollector.CONFIG);
    }
}
