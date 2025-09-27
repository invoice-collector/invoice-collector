
import { SketchCollector } from '../../sketchCollector';

export class ReviewsonmywebsiteCollector extends SketchCollector {

    static CONFIG = {
        id: "reviewsonmywebsite",
        name: "ReviewsOnMyWebsite",
        description: "i18n.collectors.reviewsonmywebsite.description",
        version: "0",
        website: "https://reviewsonmywebsite.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745687.jpg",
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
        entryUrl: "https://reviewsonmywebsite.com/",
    }

    constructor() {
        super(ReviewsonmywebsiteCollector.CONFIG);
    }
}
