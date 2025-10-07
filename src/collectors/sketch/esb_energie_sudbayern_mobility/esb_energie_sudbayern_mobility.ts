
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EsbEnergieSudbayernMobilityCollector extends SketchCollector {

    static CONFIG = {
        id: "esb_energie_sudbayern_mobility",
        name: "ESB Energie Sudbayern Mobility",
        description: "i18n.collectors.esb_energie_sudbayern_mobility.description",
        version: "0",
        website: "https://esb.ladecloud.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105974.jpg",
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
        entryUrl: "https://esb.ladecloud.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EsbEnergieSudbayernMobilityCollector.CONFIG);
    }
}
