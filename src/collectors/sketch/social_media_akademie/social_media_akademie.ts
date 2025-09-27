
import { SketchCollector } from '../../sketchCollector';

export class SocialMediaAkademieCollector extends SketchCollector {

    static CONFIG = {
        id: "social_media_akademie",
        name: "Social Media Akademie",
        description: "i18n.collectors.social_media_akademie.description",
        version: "0",
        website: "https://elearning.socialmediaakademie.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9659.jpg",
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
        entryUrl: "https://elearning.socialmediaakademie.de/",
    }

    constructor() {
        super(SocialMediaAkademieCollector.CONFIG);
    }
}
