
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AutemioCollector extends SketchCollector {

    static CONFIG = {
        id: "autemio",
        name: "Autemio",
        description: "i18n.collectors.autemio.description",
        version: "0",
        website: "https://www.autemio.de/preise/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2301833.jpg",
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
        entryUrl: "https://www.autemio.de/preise/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutemioCollector.CONFIG);
    }
}
