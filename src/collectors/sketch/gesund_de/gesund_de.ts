
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GesundDeCollector extends SketchCollector {

    static CONFIG = {
        id: "gesund_de",
        name: "gesund.de",
        description: "i18n.collectors.gesund_de.description",
        version: "0",
        website: "https://cockpit.gesund.de/apo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049623.jpg",
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
        entryUrl: "https://cockpit.gesund.de/apo",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GesundDeCollector.CONFIG);
    }
}
