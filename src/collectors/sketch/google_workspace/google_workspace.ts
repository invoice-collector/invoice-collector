import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleWorkspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "google_workspace",
        name: "Google Workspace",
        description: "i18n.collectors.google_workspace.description",
        version: "0",
        website: "https://workspace.google.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg",
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
        entryUrl: "https://admin.google.com/ac/billing/accounts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleWorkspaceCollector.CONFIG);
    }
}
