
import { SketchCollector } from '../../sketchCollector';

export class _8x8Collector extends SketchCollector {

    static CONFIG = {
        id: "8x8",
        name: "8x8",
        description: "i18n.collectors.8x8.description",
        version: "0",
        website: "https://admin.8x8.vc/#/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108442.jpg",
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
        entryUrl: "https://admin.8x8.vc/#/billing",
    }

    constructor() {
        super(_8x8Collector.CONFIG);
    }
}
