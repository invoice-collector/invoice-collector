
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TravelportCollector extends SketchCollector {

    static CONFIG = {
        id: "travelport",
        name: "Travelport",
        description: "i18n.collectors.travelport.description",
        version: "0",
        website: "https://my.travelport.com/v2/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3014708.jpg",
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
        entryUrl: "https://my.travelport.com/v2/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TravelportCollector.CONFIG);
    }
}
