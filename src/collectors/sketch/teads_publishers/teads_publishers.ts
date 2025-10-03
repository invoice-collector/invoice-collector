
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeadsPublishersCollector extends SketchCollector {

    static CONFIG = {
        id: "teads_publishers",
        name: "Teads - Publishers",
        description: "i18n.collectors.teads_publishers.description",
        version: "0",
        website: "https://publishers.teads.tv/finance/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14496.jpg",
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
        entryUrl: "https://publishers.teads.tv/finance/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeadsPublishersCollector.CONFIG);
    }
}
