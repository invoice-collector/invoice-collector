
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PakksCollector extends SketchCollector {

    static CONFIG = {
        id: "pakks",
        name: "PAKKS",
        description: "i18n.collectors.pakks.description",
        version: "0",
        website: "http://www.pakks.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159937.jpg",
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
        entryUrl: "http://www.pakks.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PakksCollector.CONFIG);
    }
}
