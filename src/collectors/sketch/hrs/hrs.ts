
import { SketchCollector } from '../../sketchCollector';

export class HrsCollector extends SketchCollector {

    static CONFIG = {
        id: "hrs",
        name: "HRS",
        description: "i18n.collectors.hrs.description",
        version: "0",
        website: "http://www.hrs.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55229.jpg",
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
        entryUrl: "http://www.hrs.de",
    }

    constructor() {
        super(HrsCollector.CONFIG);
    }
}
