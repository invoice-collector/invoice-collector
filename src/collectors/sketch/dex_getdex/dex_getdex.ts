
import { SketchCollector } from '../../sketchCollector';

export class DexGetdexCollector extends SketchCollector {

    static CONFIG = {
        id: "dex_getdex",
        name: "DEX - getdex",
        description: "i18n.collectors.dex_getdex.description",
        version: "0",
        website: "https://getdex.com/appv3/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1270232.jpg",
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
        entryUrl: "https://getdex.com/appv3/settings/billing",
    }

    constructor() {
        super(DexGetdexCollector.CONFIG);
    }
}
