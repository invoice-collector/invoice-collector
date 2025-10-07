
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CallmobileGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "callmobile_gmbh",
        name: "callmobile GmbH",
        description: "i18n.collectors.callmobile_gmbh.description",
        version: "0",
        website: "https://www.callmobile.de/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78573.jpg",
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
        entryUrl: "https://www.callmobile.de/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CallmobileGmbhCollector.CONFIG);
    }
}
