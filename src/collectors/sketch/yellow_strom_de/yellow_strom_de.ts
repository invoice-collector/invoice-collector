
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YellowStromDeCollector extends SketchCollector {

    static CONFIG = {
        id: "yellow_strom_de",
        name: "Yellow Strom (.de)",
        description: "i18n.collectors.yellow_strom_de.description",
        version: "0",
        website: "https://www.yello.de/mein-yello/anmeldung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32212.jpg",
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
        entryUrl: "https://www.yello.de/mein-yello/anmeldung",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YellowStromDeCollector.CONFIG);
    }
}
