
import { SketchCollector } from '../../sketchCollector';

export class CrefoPayCollector extends SketchCollector {

    static CONFIG = {
        id: "crefo_pay",
        name: "Crefo Pay",
        description: "i18n.collectors.crefo_pay.description",
        version: "0",
        website: "https://service.crefopay.de/msa3/#/authorized/reporting/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881819.jpg",
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
        entryUrl: "https://service.crefopay.de/msa3/#/authorized/reporting/reports",
    }

    constructor() {
        super(CrefoPayCollector.CONFIG);
    }
}
