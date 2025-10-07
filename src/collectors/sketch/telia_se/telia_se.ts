
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeliaSeCollector extends SketchCollector {

    static CONFIG = {
        id: "telia_se",
        name: "Telia.se",
        description: "i18n.collectors.telia_se.description",
        version: "0",
        website: "https://www.telia.se/privat/mitt-telia/logga-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9571.jpg",
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
        entryUrl: "https://www.telia.se/privat/mitt-telia/logga-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeliaSeCollector.CONFIG);
    }
}
