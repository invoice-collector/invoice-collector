
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NErgieCollector extends SketchCollector {

    static CONFIG = {
        id: "n_ergie",
        name: "N-ERGIE",
        description: "i18n.collectors.n_ergie.description",
        version: "0",
        website: "http://www.n-ergie.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49582.jpg",
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
        entryUrl: "http://www.n-ergie.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NErgieCollector.CONFIG);
    }
}
