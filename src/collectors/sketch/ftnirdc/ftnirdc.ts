
import { SketchCollector } from '../../sketchCollector';

export class FtnirdcCollector extends SketchCollector {

    static CONFIG = {
        id: "ftnirdc",
        name: "FTNIrdc",
        description: "i18n.collectors.ftnirdc.description",
        version: "0",
        website: "https://portal2.ftnirdc.com/en/210793",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409480.jpg",
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
        entryUrl: "https://portal2.ftnirdc.com/en/210793",
    }

    constructor() {
        super(FtnirdcCollector.CONFIG);
    }
}
