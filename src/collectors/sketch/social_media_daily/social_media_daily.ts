
import { SketchCollector } from '../../sketchCollector';

export class SocialMediaDailyCollector extends SketchCollector {

    static CONFIG = {
        id: "social_media_daily",
        name: "Social Media Daily",
        description: "i18n.collectors.social_media_daily.description",
        version: "0",
        website: "https://www.socialmediadaily.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6966.jpg",
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
        entryUrl: "https://www.socialmediadaily.de/",
    }

    constructor() {
        super(SocialMediaDailyCollector.CONFIG);
    }
}
