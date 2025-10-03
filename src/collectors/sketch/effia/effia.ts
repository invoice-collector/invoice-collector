
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EffiaCollector extends SketchCollector {

    static CONFIG = {
        id: "effia",
        name: "EFFIA",
        description: "i18n.collectors.effia.description",
        version: "0",
        website: "https://www.effia.com/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214178.jpg",
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
        entryUrl: "https://www.effia.com/#",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EffiaCollector.CONFIG);
    }
}
