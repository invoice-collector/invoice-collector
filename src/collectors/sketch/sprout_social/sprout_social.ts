
import { SketchCollector } from '../../sketchCollector';

export class SproutSocialCollector extends SketchCollector {

    static CONFIG = {
        id: "sprout_social",
        name: "Sprout Social",
        description: "i18n.collectors.sprout_social.description",
        version: "0",
        website: "https://app.sproutsocial.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8639.jpg",
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
        entryUrl: "https://app.sproutsocial.com/dashboard",
    }

    constructor() {
        super(SproutSocialCollector.CONFIG);
    }
}
