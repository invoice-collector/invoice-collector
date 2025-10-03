
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZeegCollector extends SketchCollector {

    static CONFIG = {
        id: "zeeg",
        name: "Zeeg",
        description: "i18n.collectors.zeeg.description",
        version: "0",
        website: "https://api.zeeg.me/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730012.jpg",
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
        entryUrl: "https://api.zeeg.me/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZeegCollector.CONFIG);
    }
}
