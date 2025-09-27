
import { SketchCollector } from '../../sketchCollector';

export class BoesnerCollector extends SketchCollector {

    static CONFIG = {
        id: "boesner",
        name: "boesner",
        description: "i18n.collectors.boesner.description",
        version: "0",
        website: "http://www.boesner.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51150.jpg",
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
        entryUrl: "http://www.boesner.com",
    }

    constructor() {
        super(BoesnerCollector.CONFIG);
    }
}
