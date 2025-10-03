
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlesysCollector extends SketchCollector {

    static CONFIG = {
        id: "glesys",
        name: "GleSYS",
        description: "i18n.collectors.glesys.description",
        version: "0",
        website: "https://cloud.glesys.com/#/customer/11681/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428657.jpg",
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
        entryUrl: "https://cloud.glesys.com/#/customer/11681/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlesysCollector.CONFIG);
    }
}
