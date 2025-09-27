
import { SketchCollector } from '../../sketchCollector';

export class FlodeskCollector extends SketchCollector {

    static CONFIG = {
        id: "flodesk",
        name: "Flodesk",
        description: "i18n.collectors.flodesk.description",
        version: "0",
        website: "https://app.flodesk.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698763.jpg",
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
        entryUrl: "https://app.flodesk.com/account/billing",
    }

    constructor() {
        super(FlodeskCollector.CONFIG);
    }
}
