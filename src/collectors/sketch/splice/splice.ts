
import { SketchCollector } from '../../sketchCollector';

export class SpliceCollector extends SketchCollector {

    static CONFIG = {
        id: "splice",
        name: "Splice",
        description: "i18n.collectors.splice.description",
        version: "0",
        website: "https://splice.com/profile/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70041.jpg",
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
        entryUrl: "https://splice.com/profile/billing",
    }

    constructor() {
        super(SpliceCollector.CONFIG);
    }
}
