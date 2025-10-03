
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaleanacloudCollector extends SketchCollector {

    static CONFIG = {
        id: "baleanacloud",
        name: "BaleanaCloud",
        description: "i18n.collectors.baleanacloud.description",
        version: "0",
        website: "https://dashboard.balena-cloud.com/billing/summary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169056.jpg",
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
        entryUrl: "https://dashboard.balena-cloud.com/billing/summary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaleanacloudCollector.CONFIG);
    }
}
