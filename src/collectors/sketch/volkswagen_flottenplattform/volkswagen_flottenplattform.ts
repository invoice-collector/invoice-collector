
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VolkswagenFlottenplattformCollector extends SketchCollector {

    static CONFIG = {
        id: "volkswagen_flottenplattform",
        name: "Volkswagen Flottenplattform",
        description: "i18n.collectors.volkswagen_flottenplattform.description",
        version: "0",
        website: "https://fleetonline.vwfs.com/FleetOnline/postbox?startDate=2020-05-28&endDate=2020-08-26",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492242.jpg",
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
        entryUrl: "https://fleetonline.vwfs.com/FleetOnline/postbox?startDate=2020-05-28&endDate=2020-08-26",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VolkswagenFlottenplattformCollector.CONFIG);
    }
}
