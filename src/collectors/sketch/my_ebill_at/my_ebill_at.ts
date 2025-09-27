
import { SketchCollector } from '../../sketchCollector';

export class MyEbillAtCollector extends SketchCollector {

    static CONFIG = {
        id: "my_ebill_at",
        name: "My Ebill.at",
        description: "i18n.collectors.my_ebill_at.description",
        version: "0",
        website: "https://www.my-ebill.at/index.php?id=9&no_cache=1&tx_tanmarebill_ebill%5Baction%5D=list&tx_tanmarebill_ebill%5Bcontroller%5D=EBillVKBeleg&cHash=f69c6f8633f0a454f5f581139bdc536e",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/555750.jpg",
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
        entryUrl: "https://www.my-ebill.at/index.php?id=9&no_cache=1&tx_tanmarebill_ebill%5Baction%5D=list&tx_tanmarebill_ebill%5Bcontroller%5D=EBillVKBeleg&cHash=f69c6f8633f0a454f5f581139bdc536e",
    }

    constructor() {
        super(MyEbillAtCollector.CONFIG);
    }
}
