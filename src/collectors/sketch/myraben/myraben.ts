
import { SketchCollector } from '../../sketchCollector';

export class MyrabenCollector extends SketchCollector {

    static CONFIG = {
        id: "myraben",
        name: "myRaben",
        description: "i18n.collectors.myraben.description",
        version: "0",
        website: "https://oftc.myraben.com/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1355668.jpg",
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
        entryUrl: "https://oftc.myraben.com/index.html",
    }

    constructor() {
        super(MyrabenCollector.CONFIG);
    }
}
