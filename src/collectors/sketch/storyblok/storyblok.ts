
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StoryblokCollector extends SketchCollector {

    static CONFIG = {
        id: "storyblok",
        name: "Storyblok",
        description: "i18n.collectors.storyblok.description",
        version: "0",
        website: "Storyblok.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170813.jpg",
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
        loginUrl: "Storyblok.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StoryblokCollector.CONFIG);
    }
}
