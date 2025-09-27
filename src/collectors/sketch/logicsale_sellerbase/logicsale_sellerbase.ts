
import { SketchCollector } from '../../sketchCollector';

export class LogicsaleSellerbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "logicsale_sellerbase",
        name: "logicsale - sellerbase",
        description: "i18n.collectors.logicsale_sellerbase.description",
        version: "0",
        website: "https://sellerbase.logicsale.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41084.jpg",
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
        entryUrl: "https://sellerbase.logicsale.com/login",
    }

    constructor() {
        super(LogicsaleSellerbaseCollector.CONFIG);
    }
}
