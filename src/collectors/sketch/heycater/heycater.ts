
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HeycaterCollector extends SketchCollector {

    static CONFIG = {
        id: "heycater",
        name: "Heycater",
        description: "i18n.collectors.heycater.description",
        version: "0",
        website: "https://www.heycater.com/mein-catering/bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81666.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.heycater.com/mein-catering/bestellungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HeycaterCollector.CONFIG);
    }
}
