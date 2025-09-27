
import { SketchCollector } from '../../sketchCollector';

export class SpideroakCollector extends SketchCollector {

    static CONFIG = {
        id: "spideroak",
        name: "SpiderOak",
        description: "i18n.collectors.spideroak.description",
        version: "0",
        website: "https://spideroak.com/user/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211115.jpg",
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
        entryUrl: "https://spideroak.com/user/history",
    }

    constructor() {
        super(SpideroakCollector.CONFIG);
    }
}
