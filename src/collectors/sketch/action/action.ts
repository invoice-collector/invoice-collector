
import { SketchCollector } from '../../sketchCollector';

export class ActionCollector extends SketchCollector {

    static CONFIG = {
        id: "action",
        name: "Action",
        description: "i18n.collectors.action.description",
        version: "0",
        website: "https://www.action.com/de-de/favoriten/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1803806.jpg",
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
        entryUrl: "https://www.action.com/de-de/favoriten/",
    }

    constructor() {
        super(ActionCollector.CONFIG);
    }
}
