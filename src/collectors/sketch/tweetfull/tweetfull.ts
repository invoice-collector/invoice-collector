
import { SketchCollector } from '../../sketchCollector';

export class TweetfullCollector extends SketchCollector {

    static CONFIG = {
        id: "tweetfull",
        name: "TweetFull",
        description: "i18n.collectors.tweetfull.description",
        version: "0",
        website: "https://www.tweetfull.com/signin.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34161.jpg",
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
        entryUrl: "https://www.tweetfull.com/signin.php",
    }

    constructor() {
        super(TweetfullCollector.CONFIG);
    }
}
