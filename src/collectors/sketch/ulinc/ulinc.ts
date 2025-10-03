
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UlincCollector extends SketchCollector {

    static CONFIG = {
        id: "ulinc",
        name: "ulinc",
        description: "i18n.collectors.ulinc.description",
        version: "0",
        website: "https://ulinc.co/subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436444.jpg",
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
        entryUrl: "https://ulinc.co/subscription/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UlincCollector.CONFIG);
    }
}
