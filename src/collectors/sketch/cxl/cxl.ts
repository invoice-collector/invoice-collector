
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CxlCollector extends SketchCollector {

    static CONFIG = {
        id: "cxl",
        name: "CXL",
        description: "i18n.collectors.cxl.description",
        version: "0",
        website: "https://conversionxl.com/institute/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95497.jpg",
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
        entryUrl: "https://conversionxl.com/institute/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CxlCollector.CONFIG);
    }
}
