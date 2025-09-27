
import { SketchCollector } from '../../sketchCollector';

export class Level3Collector extends SketchCollector {

    static CONFIG = {
        id: "level_3",
        name: "Level 3",
        description: "i18n.collectors.level_3.description",
        version: "0",
        website: "https://account.level3.com/login?service=https%3A%2F%2Fmy.level3.com%2FportalWeb%2Fpartner%2Fcommon%2Flogin%2Fbegin.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87698.jpg",
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
        entryUrl: "https://account.level3.com/login?service=https%3A%2F%2Fmy.level3.com%2FportalWeb%2Fpartner%2Fcommon%2Flogin%2Fbegin.do",
    }

    constructor() {
        super(Level3Collector.CONFIG);
    }
}
