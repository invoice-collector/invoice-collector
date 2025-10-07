
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShiparoundCollector extends SketchCollector {

    static CONFIG = {
        id: "shiparound",
        name: "Shiparound",
        description: "i18n.collectors.shiparound.description",
        version: "0",
        website: "https://www.shiparound.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777359.jpg",
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
        entryUrl: "https://www.shiparound.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShiparoundCollector.CONFIG);
    }
}
