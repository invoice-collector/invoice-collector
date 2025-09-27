
import { SketchCollector } from '../../sketchCollector';

export class FreeagentCollector extends SketchCollector {

    static CONFIG = {
        id: "freeagent",
        name: "freeAgent",
        description: "i18n.collectors.freeagent.description",
        version: "0",
        website: "https://login.freeagent.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6478.jpg",
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
        entryUrl: "https://login.freeagent.com/login",
    }

    constructor() {
        super(FreeagentCollector.CONFIG);
    }
}
