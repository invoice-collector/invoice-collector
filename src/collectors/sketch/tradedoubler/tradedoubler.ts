
import { SketchCollector } from '../../sketchCollector';

export class TradedoublerCollector extends SketchCollector {

    static CONFIG = {
        id: "tradedoubler",
        name: "Tradedoubler",
        description: "i18n.collectors.tradedoubler.description",
        version: "0",
        website: "https://login.tradedoubler.com/public/aLogin.action?language=de&country=GB",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9496.jpg",
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
        entryUrl: "https://login.tradedoubler.com/public/aLogin.action?language=de&country=GB",
    }

    constructor() {
        super(TradedoublerCollector.CONFIG);
    }
}
