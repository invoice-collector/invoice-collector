
import { SketchCollector } from '../../sketchCollector';

export class WrikeCollector extends SketchCollector {

    static CONFIG = {
        id: "wrike",
        name: "Wrike",
        description: "i18n.collectors.wrike.description",
        version: "0",
        website: "https://www.wrike.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6706.jpg",
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
        entryUrl: "https://www.wrike.com/login/",
    }

    constructor() {
        super(WrikeCollector.CONFIG);
    }
}
