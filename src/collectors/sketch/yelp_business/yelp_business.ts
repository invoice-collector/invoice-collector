
import { SketchCollector } from '../../sketchCollector';

export class YelpBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "yelp_business",
        name: "Yelp - Business",
        description: "i18n.collectors.yelp_business.description",
        version: "0",
        website: "https://biz.yelp.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4562015.jpg",
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
        entryUrl: "https://biz.yelp.com/billing",
    }

    constructor() {
        super(YelpBusinessCollector.CONFIG);
    }
}
