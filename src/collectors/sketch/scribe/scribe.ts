
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScribeCollector extends SketchCollector {

    static CONFIG = {
        id: "scribe",
        name: "Scribe",
        description: "i18n.collectors.scribe.description",
        version: "0",
        website: "https://scribehow.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1665786.jpg",
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
        entryUrl: "https://scribehow.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScribeCollector.CONFIG);
    }
}
