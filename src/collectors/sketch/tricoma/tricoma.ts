
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TricomaCollector extends SketchCollector {

    static CONFIG = {
        id: "tricoma",
        name: "tricoma",
        description: "i18n.collectors.tricoma.description",
        version: "0",
        website: "http://www.tricoma.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56929.jpg",
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
        entryUrl: "http://www.tricoma.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TricomaCollector.CONFIG);
    }
}
