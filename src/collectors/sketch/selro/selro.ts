
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SelroCollector extends SketchCollector {

    static CONFIG = {
        id: "selro",
        name: "selro",
        description: "i18n.collectors.selro.description",
        version: "0",
        website: "https://app5.selro.com/account/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1763955.jpg",
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
        entryUrl: "https://app5.selro.com/account/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SelroCollector.CONFIG);
    }
}
