
import { SketchCollector } from '../../sketchCollector';

export class AmazonCoJpCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_co_jp",
        name: "Amazon (.co.jp)",
        description: "i18n.collectors.amazon_co_jp.description",
        version: "0",
        website: "https://www.amazon.co.jp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46908.jpg",
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
        entryUrl: "https://www.amazon.co.jp/",
    }

    constructor() {
        super(AmazonCoJpCollector.CONFIG);
    }
}
