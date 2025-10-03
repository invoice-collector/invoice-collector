
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SocialMediaGainsCollector extends SketchCollector {

    static CONFIG = {
        id: "social_media_gains",
        name: "Social Media Gains",
        description: "i18n.collectors.social_media_gains.description",
        version: "0",
        website: "https://socialmediagains.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1220998.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://socialmediagains.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SocialMediaGainsCollector.CONFIG);
    }
}
