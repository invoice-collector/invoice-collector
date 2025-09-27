
import { SketchCollector } from '../../sketchCollector';

export class McafeeEpolicyOrchestratorCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "mcafee_epolicy_orchestrator_cloud",
        name: "McAfee ePolicy Orchestrator Cloud",
        description: "i18n.collectors.mcafee_epolicy_orchestrator_cloud.description",
        version: "0",
        website: "https://home.mcafee.com/secure/protected/login.aspx?rfhs=1&culture=en-us",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21948.jpg",
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
        entryUrl: "https://home.mcafee.com/secure/protected/login.aspx?rfhs=1&culture=en-us",
    }

    constructor() {
        super(McafeeEpolicyOrchestratorCloudCollector.CONFIG);
    }
}
