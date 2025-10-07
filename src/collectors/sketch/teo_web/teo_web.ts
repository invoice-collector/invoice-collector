
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeoWebCollector extends SketchCollector {

    static CONFIG = {
        id: "teo_web",
        name: "TEO Web",
        description: "i18n.collectors.teo_web.description",
        version: "0",
        website: "https://web.goteo.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/545032.jpg",
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
        entryUrl: "https://web.goteo.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeoWebCollector.CONFIG);
    }
}
