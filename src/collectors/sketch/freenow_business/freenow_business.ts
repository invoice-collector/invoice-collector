
import { SketchCollector } from '../../sketchCollector';

export class FreenowBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "freenow_business",
        name: "FreeNow Business",
        description: "i18n.collectors.freenow_business.description",
        version: "0",
        website: "https://business.free-now.com/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158574.jpg",
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
        entryUrl: "https://business.free-now.com/statements",
    }

    constructor() {
        super(FreenowBusinessCollector.CONFIG);
    }
}
