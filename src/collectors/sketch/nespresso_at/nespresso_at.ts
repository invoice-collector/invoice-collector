
import { SketchCollector } from '../../sketchCollector';

export class NespressoAtCollector extends SketchCollector {

    static CONFIG = {
        id: "nespresso_at",
        name: "Nespresso AT",
        description: "i18n.collectors.nespresso_at.description",
        version: "0",
        website: "https://www.nespresso.com/at/de/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1269265.jpg",
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
        entryUrl: "https://www.nespresso.com/at/de/home",
    }

    constructor() {
        super(NespressoAtCollector.CONFIG);
    }
}
