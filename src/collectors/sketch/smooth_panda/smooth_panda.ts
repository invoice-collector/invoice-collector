
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmoothPandaCollector extends SketchCollector {

    static CONFIG = {
        id: "smooth_panda",
        name: "Smooth Panda",
        description: "i18n.collectors.smooth_panda.description",
        version: "0",
        website: "https://smoothpanda.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1961394.jpg",
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
        entryUrl: "https://smoothpanda.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmoothPandaCollector.CONFIG);
    }
}
