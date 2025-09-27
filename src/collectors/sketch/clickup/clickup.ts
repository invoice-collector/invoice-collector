
import { SketchCollector } from '../../sketchCollector';

export class ClickupCollector extends SketchCollector {

    static CONFIG = {
        id: "clickup",
        name: "ClickUp",
        description: "i18n.collectors.clickup.description",
        version: "0",
        website: "https://app.clickup.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80141.jpg",
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
        entryUrl: "https://app.clickup.com",
    }

    constructor() {
        super(ClickupCollector.CONFIG);
    }
}
