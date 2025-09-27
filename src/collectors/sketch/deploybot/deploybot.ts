
import { SketchCollector } from '../../sketchCollector';

export class DeploybotCollector extends SketchCollector {

    static CONFIG = {
        id: "deploybot",
        name: "DeployBot",
        description: "i18n.collectors.deploybot.description",
        version: "0",
        website: "https://login.deploybot.com/session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30816.jpg",
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
        entryUrl: "https://login.deploybot.com/session/new",
    }

    constructor() {
        super(DeploybotCollector.CONFIG);
    }
}
