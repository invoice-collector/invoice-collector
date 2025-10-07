
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WasabiCollector extends SketchCollector {

    static CONFIG = {
        id: "wasabi",
        name: "Wasabi",
        description: "i18n.collectors.wasabi.description",
        version: "0",
        website: "https://console.wasabisys.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120869.jpg",
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
        entryUrl: "https://console.wasabisys.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WasabiCollector.CONFIG);
    }
}
