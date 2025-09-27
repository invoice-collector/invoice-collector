
import { SketchCollector } from '../../sketchCollector';

export class TeamviewerCollector extends SketchCollector {

    static CONFIG = {
        id: "teamviewer",
        name: "TeamViewer",
        description: "i18n.collectors.teamviewer.description",
        version: "0",
        website: "https://login.teamviewer.com/LogOn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/653.jpg",
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
        entryUrl: "https://login.teamviewer.com/LogOn",
    }

    constructor() {
        super(TeamviewerCollector.CONFIG);
    }
}
