
import { SketchCollector } from '../../sketchCollector';

export class GoogleWorkspaceAdminkonsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "google_workspace_adminkonsole",
        name: "Google Workspace Adminkonsole",
        description: "i18n.collectors.google_workspace_adminkonsole.description",
        version: "0",
        website: "https://admin.google.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1435535.jpg",
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
        entryUrl: "https://admin.google.com",
    }

    constructor() {
        super(GoogleWorkspaceAdminkonsoleCollector.CONFIG);
    }
}
