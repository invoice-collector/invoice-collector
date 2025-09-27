
import { SketchCollector } from '../../sketchCollector';

export class RightBloggerCollector extends SketchCollector {

    static CONFIG = {
        id: "right_blogger",
        name: "Right Blogger",
        description: "i18n.collectors.right_blogger.description",
        version: "0",
        website: "https://rightblogger.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3062233.jpg",
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
        entryUrl: "https://rightblogger.com/signin",
    }

    constructor() {
        super(RightBloggerCollector.CONFIG);
    }
}
