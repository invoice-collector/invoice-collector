
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WaipuTvCollector extends SketchCollector {

    static CONFIG = {
        id: "waipu_tv",
        name: "waipu.tv",
        description: "i18n.collectors.waipu_tv.description",
        version: "0",
        website: "https://customer-self-care.waipu.tv/ui/my_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23461.jpg",
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
        entryUrl: "https://customer-self-care.waipu.tv/ui/my_invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WaipuTvCollector.CONFIG);
    }
}
