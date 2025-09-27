
import { SketchCollector } from '../../sketchCollector';

export class FuzeCollector extends SketchCollector {

    static CONFIG = {
        id: "fuze",
        name: "Fuze",
        description: "i18n.collectors.fuze.description",
        version: "0",
        website: "https://portal.thinkingphones.com/jetspeed/portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6419.jpg",
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
        entryUrl: "https://portal.thinkingphones.com/jetspeed/portal/",
    }

    constructor() {
        super(FuzeCollector.CONFIG);
    }
}
