
import { SketchCollector } from '../../sketchCollector';

export class ReviewsIoCollector extends SketchCollector {

    static CONFIG = {
        id: "reviews_io",
        name: "Reviews.io",
        description: "i18n.collectors.reviews_io.description",
        version: "0",
        website: "https://dash.reviews.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87314.jpg",
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
        entryUrl: "https://dash.reviews.io/login",
    }

    constructor() {
        super(ReviewsIoCollector.CONFIG);
    }
}
