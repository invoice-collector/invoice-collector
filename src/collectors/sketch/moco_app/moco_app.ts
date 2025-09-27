
import { SketchCollector } from '../../sketchCollector';

export class MocoAppCollector extends SketchCollector {

    static CONFIG = {
        id: "moco_app",
        name: "moco app",
        description: "i18n.collectors.moco_app.description",
        version: "0",
        website: "https://www.mocoapp.com/agentursoftware/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21569.jpg",
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
        entryUrl: "https://www.mocoapp.com/agentursoftware/login",
    }

    constructor() {
        super(MocoAppCollector.CONFIG);
    }
}
