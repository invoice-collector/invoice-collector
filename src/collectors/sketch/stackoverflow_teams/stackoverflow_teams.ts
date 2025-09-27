
import { SketchCollector } from '../../sketchCollector';

export class StackoverflowTeamsCollector extends SketchCollector {

    static CONFIG = {
        id: "stackoverflow_teams",
        name: "Stackoverflow Teams",
        description: "i18n.collectors.stackoverflow_teams.description",
        version: "0",
        website: "https://stackoverflowteams.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3079093.jpg",
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
        entryUrl: "https://stackoverflowteams.com/users/login",
    }

    constructor() {
        super(StackoverflowTeamsCollector.CONFIG);
    }
}
