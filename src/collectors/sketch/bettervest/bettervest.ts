
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BettervestCollector extends SketchCollector {

    static CONFIG = {
        id: "bettervest",
        name: "bettervest",
        description: "i18n.collectors.bettervest.description",
        version: "0",
        website: "https://www.bettervest.com/de/meine-investitionen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121235.jpg",
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
        entryUrl: "https://www.bettervest.com/de/meine-investitionen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BettervestCollector.CONFIG);
    }
}
