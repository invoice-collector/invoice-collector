
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeErfurtCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_erfurt",
        name: "Stadtwerke Erfurt",
        description: "i18n.collectors.stadtwerke_erfurt.description",
        version: "0",
        website: "https://swe.emobilitycloud.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75346.jpg",
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
        entryUrl: "https://swe.emobilitycloud.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeErfurtCollector.CONFIG);
    }
}
