
import { SketchCollector } from '../../sketchCollector';

export class ScispaceCollector extends SketchCollector {

    static CONFIG = {
        id: "scispace",
        name: "SciSpace",
        description: "i18n.collectors.scispace.description",
        version: "0",
        website: "https://scispace.com/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216915.jpg",
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
        entryUrl: "https://scispace.com/accounts/login/",
    }

    constructor() {
        super(ScispaceCollector.CONFIG);
    }
}
