
import { SketchCollector } from '../../sketchCollector';

export class WrangleCollector extends SketchCollector {

    static CONFIG = {
        id: "wrangle",
        name: "Wrangle",
        description: "i18n.collectors.wrangle.description",
        version: "0",
        website: "https://slack.wrangle.io/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727692.jpg",
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
        entryUrl: "https://slack.wrangle.io/auth/login",
    }

    constructor() {
        super(WrangleCollector.CONFIG);
    }
}
