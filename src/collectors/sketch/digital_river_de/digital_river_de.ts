
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigitalRiverDeCollector extends SketchCollector {

    static CONFIG = {
        id: "digital_river_de",
        name: "Digital River(.de)",
        description: "i18n.collectors.digital_river_de.description",
        version: "0",
        website: "https://www.digitalriver.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/176819.jpg",
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
        entryUrl: "https://www.digitalriver.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigitalRiverDeCollector.CONFIG);
    }
}
