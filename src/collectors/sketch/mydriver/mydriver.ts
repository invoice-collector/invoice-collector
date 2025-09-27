
import { SketchCollector } from '../../sketchCollector';

export class MydriverCollector extends SketchCollector {

    static CONFIG = {
        id: "mydriver",
        name: "myDriver",
        description: "i18n.collectors.mydriver.description",
        version: "0",
        website: "https://www.mydriver.com/en/rides",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7450.jpg",
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
        entryUrl: "https://www.mydriver.com/en/rides",
    }

    constructor() {
        super(MydriverCollector.CONFIG);
    }
}
