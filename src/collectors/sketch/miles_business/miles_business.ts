
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MilesBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "miles_business",
        name: "Miles Business",
        description: "i18n.collectors.miles_business.description",
        version: "0",
        website: "https://business.app.miles-mobility.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098334.jpg",
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
        entryUrl: "https://business.app.miles-mobility.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MilesBusinessCollector.CONFIG);
    }
}
