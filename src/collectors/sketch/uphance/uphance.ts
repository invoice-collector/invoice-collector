
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UphanceCollector extends SketchCollector {

    static CONFIG = {
        id: "uphance",
        name: "uphance",
        description: "i18n.collectors.uphance.description",
        version: "0",
        website: "https://app.uphance.com/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202968.jpg",
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
        entryUrl: "https://app.uphance.com/settings/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UphanceCollector.CONFIG);
    }
}
