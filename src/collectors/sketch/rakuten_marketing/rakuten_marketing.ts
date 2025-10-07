
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RakutenMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "rakuten_marketing",
        name: "Rakuten Marketing",
        description: "i18n.collectors.rakuten_marketing.description",
        version: "0",
        website: "https://login.linkshare.com/sso/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51573.jpg",
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
        entryUrl: "https://login.linkshare.com/sso/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RakutenMarketingCollector.CONFIG);
    }
}
