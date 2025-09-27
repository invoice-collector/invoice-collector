
import { SketchCollector } from '../../sketchCollector';

export class A1BusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "a1_business",
        name: "A1 Business",
        description: "i18n.collectors.a1_business.description",
        version: "0",
        website: "https://ppp.a1.net/start/index.sp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9444.jpg",
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
        entryUrl: "https://ppp.a1.net/start/index.sp",
    }

    constructor() {
        super(A1BusinessCollector.CONFIG);
    }
}
