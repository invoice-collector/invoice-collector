
import { SketchCollector } from '../../sketchCollector';

export class TwitterCollector extends SketchCollector {

    static CONFIG = {
        id: "twitter",
        name: "Twitter",
        description: "i18n.collectors.twitter.description",
        version: "0",
        website: "https://twitter.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4507.jpg",
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
        entryUrl: "https://twitter.com/login",
    }

    constructor() {
        super(TwitterCollector.CONFIG);
    }
}
