
import { SketchCollector } from '../../sketchCollector';

export class WurttembergischeVermittlerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "wurttembergische_vermittlerportal",
        name: "Wurttembergische - Vermittlerportal",
        description: "i18n.collectors.wurttembergische_vermittlerportal.description",
        version: "0",
        website: "https://vertriebsportal.wuerttembergische.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102416.jpg",
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
        entryUrl: "https://vertriebsportal.wuerttembergische.de",
    }

    constructor() {
        super(WurttembergischeVermittlerportalCollector.CONFIG);
    }
}
