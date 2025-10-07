
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Planet33Collector extends SketchCollector {

    static CONFIG = {
        id: "planet33",
        name: "Planet33",
        description: "i18n.collectors.planet33.description",
        version: "0",
        website: "https://portal.planet33.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83432.jpg",
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
        entryUrl: "https://portal.planet33.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Planet33Collector.CONFIG);
    }
}
