
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlottenkarteStarCollector extends SketchCollector {

    static CONFIG = {
        id: "flottenkarte_star",
        name: "Flottenkarte Star",
        description: "i18n.collectors.flottenkarte_star.description",
        version: "0",
        website: "https://flottenkarte.star.de/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097857.jpg",
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
        entryUrl: "https://flottenkarte.star.de/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlottenkarteStarCollector.CONFIG);
    }
}
