
import { SketchCollector } from '../../sketchCollector';

export class SeamlessCollector extends SketchCollector {

    static CONFIG = {
        id: "seamless",
        name: "Seamless",
        description: "i18n.collectors.seamless.description",
        version: "0",
        website: "https://www.seamless.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8663.jpg",
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
        entryUrl: "https://www.seamless.com/login",
    }

    constructor() {
        super(SeamlessCollector.CONFIG);
    }
}
