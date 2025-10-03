
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AirWolfCollector extends SketchCollector {

    static CONFIG = {
        id: "air_wolf",
        name: "Air-Wolf",
        description: "i18n.collectors.air_wolf.description",
        version: "0",
        website: "https://www.air-wolf.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503724.jpg",
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
        entryUrl: "https://www.air-wolf.de/account/order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirWolfCollector.CONFIG);
    }
}
