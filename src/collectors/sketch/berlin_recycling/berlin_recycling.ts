
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BerlinRecyclingCollector extends SketchCollector {

    static CONFIG = {
        id: "berlin_recycling",
        name: "Berlin Recycling",
        description: "i18n.collectors.berlin_recycling.description",
        version: "0",
        website: "https://kundenportal.berlin-recycling.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26392.jpg",
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
        entryUrl: "https://kundenportal.berlin-recycling.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BerlinRecyclingCollector.CONFIG);
    }
}
