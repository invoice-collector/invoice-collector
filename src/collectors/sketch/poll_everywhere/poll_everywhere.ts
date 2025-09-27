
import { SketchCollector } from '../../sketchCollector';

export class PollEverywhereCollector extends SketchCollector {

    static CONFIG = {
        id: "poll_everywhere",
        name: "Poll Everywhere",
        description: "i18n.collectors.poll_everywhere.description",
        version: "0",
        website: "https://www.polleverywhere.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32332.jpg",
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
        entryUrl: "https://www.polleverywhere.com/login",
    }

    constructor() {
        super(PollEverywhereCollector.CONFIG);
    }
}
