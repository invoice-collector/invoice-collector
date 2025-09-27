
import { SketchCollector } from '../../sketchCollector';

export class MyposCollector extends SketchCollector {

    static CONFIG = {
        id: "mypos",
        name: "myPOS",
        description: "i18n.collectors.mypos.description",
        version: "0",
        website: "http://www.mypos.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87618.jpg",
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
        entryUrl: "http://www.mypos.eu",
    }

    constructor() {
        super(MyposCollector.CONFIG);
    }
}
