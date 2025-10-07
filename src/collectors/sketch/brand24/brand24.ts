
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Brand24Collector extends SketchCollector {

    static CONFIG = {
        id: "brand24",
        name: "Brand24",
        description: "i18n.collectors.brand24.description",
        version: "0",
        website: "https://brand24.recurly.com/account/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1447414.jpg",
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
        entryUrl: "https://brand24.recurly.com/account/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Brand24Collector.CONFIG);
    }
}
