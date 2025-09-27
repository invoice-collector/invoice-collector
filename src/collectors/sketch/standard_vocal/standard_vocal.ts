
import { SketchCollector } from '../../sketchCollector';

export class StandardVocalCollector extends SketchCollector {

    static CONFIG = {
        id: "standard_vocal",
        name: "Standard Vocal",
        description: "i18n.collectors.standard_vocal.description",
        version: "0",
        website: "https://www.standard-vocal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778227.jpg",
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
        entryUrl: "https://www.standard-vocal.com/",
    }

    constructor() {
        super(StandardVocalCollector.CONFIG);
    }
}
