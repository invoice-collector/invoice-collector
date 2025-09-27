
import { SketchCollector } from '../../sketchCollector';

export class PodigeeCollector extends SketchCollector {

    static CONFIG = {
        id: "podigee",
        name: "podigee",
        description: "i18n.collectors.podigee.description",
        version: "0",
        website: "https://app.podigee.com/settings#billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59726.jpg",
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
        entryUrl: "https://app.podigee.com/settings#billing",
    }

    constructor() {
        super(PodigeeCollector.CONFIG);
    }
}
