import { SketchCollector } from '../../sketchCollector';

export class GoogleWorkspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "google_workspace",
        name: "Google Workspace",
        description: "i18n.collectors.google_workspace.description",
        version: "0",
        website: "https://workspace.google.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
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
        }
    }

    constructor() {
        super(GoogleWorkspaceCollector.CONFIG);
    }
}
