
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProSitemapsComCollector extends SketchCollector {

    static CONFIG = {
        id: "pro_sitemaps_com",
        name: "pro-sitemaps.com",
        description: "i18n.collectors.pro_sitemaps_com.description",
        version: "0",
        website: "https://pro-sitemaps.com/account/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/556116.jpg",
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
        entryUrl: "https://pro-sitemaps.com/account/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProSitemapsComCollector.CONFIG);
    }
}
