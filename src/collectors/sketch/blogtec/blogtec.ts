
import { SketchCollector } from '../../sketchCollector';

export class BlogtecCollector extends SketchCollector {

    static CONFIG = {
        id: "blogtec",
        name: "BlogTec",
        description: "i18n.collectors.blogtec.description",
        version: "0",
        website: "https://app.blogtec.io/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940358.jpg",
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
        entryUrl: "https://app.blogtec.io/login/",
    }

    constructor() {
        super(BlogtecCollector.CONFIG);
    }
}
