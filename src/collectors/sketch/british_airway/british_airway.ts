
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BritishAirwayCollector extends SketchCollector {

    static CONFIG = {
        id: "british_airway",
        name: "british airway",
        description: "i18n.collectors.british_airway.description",
        version: "0",
        website: "https://www.britishairways.com/travel/viewaccount/inet/en_de?eId=106062&source=INET_LHN_PASTBOOKINGS",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185051.jpg",
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
        entryUrl: "https://www.britishairways.com/travel/viewaccount/inet/en_de?eId=106062&source=INET_LHN_PASTBOOKINGS",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BritishAirwayCollector.CONFIG);
    }
}
