
import { SketchCollector } from '../../sketchCollector';

export class ItradeCollector extends SketchCollector {

    static CONFIG = {
        id: "itrade",
        name: "Itrade",
        description: "i18n.collectors.itrade.description",
        version: "0",
        website: "https://outlook.live.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881930.jpg",
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
        entryUrl: "https://outlook.live.com/",
    }

    constructor() {
        super(ItradeCollector.CONFIG);
    }
}
