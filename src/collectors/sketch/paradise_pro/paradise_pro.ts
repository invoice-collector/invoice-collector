
import { SketchCollector } from '../../sketchCollector';

export class ParadiseProCollector extends SketchCollector {

    static CONFIG = {
        id: "paradise_pro",
        name: "Paradise Pro",
        description: "i18n.collectors.paradise_pro.description",
        version: "0",
        website: "https://pro.paradise-distribution.com/de/app/admin/finance/statements?offset=0&rowNum=20&sort=statementAccountingPeriod-desc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2793063.jpg",
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
        entryUrl: "https://pro.paradise-distribution.com/de/app/admin/finance/statements?offset=0&rowNum=20&sort=statementAccountingPeriod-desc",
    }

    constructor() {
        super(ParadiseProCollector.CONFIG);
    }
}
