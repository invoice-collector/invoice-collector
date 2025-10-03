
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaurnewmediaCollector extends SketchCollector {

    static CONFIG = {
        id: "baurnewmedia",
        name: "baurnewmedia",
        description: "i18n.collectors.baurnewmedia.description",
        version: "0",
        website: "https://www.baurnewmedia.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7787.jpg",
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
        entryUrl: "https://www.baurnewmedia.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaurnewmediaCollector.CONFIG);
    }
}
