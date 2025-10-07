
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DruckherrCollector extends SketchCollector {

    static CONFIG = {
        id: "druckherr",
        name: "Druckherr",
        description: "i18n.collectors.druckherr.description",
        version: "0",
        website: "https://www.druckherr.de/konto_tracking.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1380044.jpg",
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
        entryUrl: "https://www.druckherr.de/konto_tracking.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DruckherrCollector.CONFIG);
    }
}
