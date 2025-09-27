
import { SketchCollector } from '../../sketchCollector';

export class SyscoIrelandCollector extends SketchCollector {

    static CONFIG = {
        id: "sysco_ireland",
        name: "Sysco Ireland",
        description: "i18n.collectors.sysco_ireland.description",
        version: "0",
        website: "https://order.syscoireland.com/selfservice/index/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445903.jpg",
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
        entryUrl: "https://order.syscoireland.com/selfservice/index/invoice/",
    }

    constructor() {
        super(SyscoIrelandCollector.CONFIG);
    }
}
