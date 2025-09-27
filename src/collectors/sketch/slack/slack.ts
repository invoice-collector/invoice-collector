
import { SketchCollector } from '../../sketchCollector';

export class SlackCollector extends SketchCollector {

    static CONFIG = {
        id: "slack",
        name: "slack",
        description: "i18n.collectors.slack.description",
        version: "0",
        website: "https://slack.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6348.jpg",
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
        entryUrl: "https://slack.com/signin",
    }

    constructor() {
        super(SlackCollector.CONFIG);
    }
}
