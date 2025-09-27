
import { SketchCollector } from '../../sketchCollector';

export class GrowYourSocialCollector extends SketchCollector {

    static CONFIG = {
        id: "grow_your_social",
        name: "Grow-Your-Social",
        description: "i18n.collectors.grow_your_social.description",
        version: "0",
        website: "https://app.grow-your-social.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4466224.jpg",
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
        entryUrl: "https://app.grow-your-social.com/login",
    }

    constructor() {
        super(GrowYourSocialCollector.CONFIG);
    }
}
