
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EventzoneDeCollector extends SketchCollector {

    static CONFIG = {
        id: "eventzone_de",
        name: "eventzone.de",
        description: "i18n.collectors.eventzone_de.description",
        version: "0",
        website: "https://eventzone.de/artists/4101/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919278.jpg",
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
        entryUrl: "https://eventzone.de/artists/4101/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EventzoneDeCollector.CONFIG);
    }
}
