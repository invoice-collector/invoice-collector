
import { SketchCollector } from '../../sketchCollector';

export class VeriffCollector extends SketchCollector {

    static CONFIG = {
        id: "veriff",
        name: "Veriff",
        description: "i18n.collectors.veriff.description",
        version: "0",
        website: "https://station.veriff.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282455.jpg",
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
        entryUrl: "https://station.veriff.com/billing",
    }

    constructor() {
        super(VeriffCollector.CONFIG);
    }
}
