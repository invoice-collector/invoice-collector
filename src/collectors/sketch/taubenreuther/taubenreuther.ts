
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TaubenreutherCollector extends SketchCollector {

    static CONFIG = {
        id: "taubenreuther",
        name: "Taubenreuther",
        description: "i18n.collectors.taubenreuther.description",
        version: "0",
        website: "https://www.offroad24.de/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1186023.jpg",
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
        entryUrl: "https://www.offroad24.de/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TaubenreutherCollector.CONFIG);
    }
}
