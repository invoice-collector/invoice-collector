
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KalaydoCollector extends SketchCollector {

    static CONFIG = {
        id: "kalaydo",
        name: "Kalaydo",
        description: "i18n.collectors.kalaydo.description",
        version: "0",
        website: "https://www.kalaydo.de/nichtangemeldet.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14901.jpg",
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
        entryUrl: "https://www.kalaydo.de/nichtangemeldet.htm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KalaydoCollector.CONFIG);
    }
}
