
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TapfiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "tapfiliate",
        name: "Tapfiliate",
        description: "i18n.collectors.tapfiliate.description",
        version: "0",
        website: "https://tapfiliate.com/login_check",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11262.jpg",
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
        entryUrl: "https://tapfiliate.com/login_check",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TapfiliateCollector.CONFIG);
    }
}
