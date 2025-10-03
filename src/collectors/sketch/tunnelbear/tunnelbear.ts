
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TunnelbearCollector extends SketchCollector {

    static CONFIG = {
        id: "tunnelbear",
        name: "Tunnelbear",
        description: "i18n.collectors.tunnelbear.description",
        version: "0",
        website: "https://www.tunnelbear.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778114.jpg",
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
        entryUrl: "https://www.tunnelbear.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TunnelbearCollector.CONFIG);
    }
}
