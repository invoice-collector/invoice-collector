
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirSerbiaCollector extends SketchCollector {

    static CONFIG = {
        id: "air_serbia",
        name: "Air Serbia",
        description: "i18n.collectors.air_serbia.description",
        version: "0",
        website: "https://www.airserbia.com/de/my-trips",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28709.jpg",
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
        entryUrl: "https://www.airserbia.com/de/my-trips",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirSerbiaCollector.CONFIG);
    }
}
