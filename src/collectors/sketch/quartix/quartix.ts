
import { SketchCollector } from '../../sketchCollector';

export class QuartixCollector extends SketchCollector {

    static CONFIG = {
        id: "quartix",
        name: "Quartix",
        description: "i18n.collectors.quartix.description",
        version: "0",
        website: "https://www.quartix.com/en-ie/sign-in/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408105.jpg",
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
        entryUrl: "https://www.quartix.com/en-ie/sign-in/",
    }

    constructor() {
        super(QuartixCollector.CONFIG);
    }
}
