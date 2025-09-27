
import { SketchCollector } from '../../sketchCollector';

export class BlogadsCollector extends SketchCollector {

    static CONFIG = {
        id: "blogads",
        name: "blogads",
        description: "i18n.collectors.blogads.description",
        version: "0",
        website: "https://www.blogads.de/account/booking/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862717.jpg",
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
        entryUrl: "https://www.blogads.de/account/booking/",
    }

    constructor() {
        super(BlogadsCollector.CONFIG);
    }
}
