
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvpassCollector extends SketchCollector {

    static CONFIG = {
        id: "evpass",
        name: "EVPass",
        description: "i18n.collectors.evpass.description",
        version: "0",
        website: "https://www.evpass.ch/Transaction/Transaction",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/516933.jpg",
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
        entryUrl: "https://www.evpass.ch/Transaction/Transaction",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvpassCollector.CONFIG);
    }
}
