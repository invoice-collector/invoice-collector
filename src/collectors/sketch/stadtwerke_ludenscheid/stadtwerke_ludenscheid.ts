
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeLudenscheidCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_ludenscheid",
        name: "Stadtwerke Ludenscheid",
        description: "i18n.collectors.stadtwerke_ludenscheid.description",
        version: "0",
        website: "https://swls.emobilitycloud.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75363.jpg",
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
        entryUrl: "https://swls.emobilitycloud.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeLudenscheidCollector.CONFIG);
    }
}
