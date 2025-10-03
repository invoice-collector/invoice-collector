
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TopviewCollector extends SketchCollector {

    static CONFIG = {
        id: "topview",
        name: "Topview",
        description: "i18n.collectors.topview.description",
        version: "0",
        website: "https://www.topview.ai/dashboard/subscription?type=Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4466240.jpg",
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
        entryUrl: "https://www.topview.ai/dashboard/subscription?type=Invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TopviewCollector.CONFIG);
    }
}
