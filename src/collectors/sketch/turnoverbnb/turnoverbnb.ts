
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TurnoverbnbCollector extends SketchCollector {

    static CONFIG = {
        id: "turnoverbnb",
        name: "TurnoverBnB",
        description: "i18n.collectors.turnoverbnb.description",
        version: "0",
        website: "https://app.turnoverbnb.com/host/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178562.jpg",
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
        entryUrl: "https://app.turnoverbnb.com/host/settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TurnoverbnbCollector.CONFIG);
    }
}
