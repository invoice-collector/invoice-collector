
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CommerzbankKreditkartenabrechnungBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "commerzbank_kreditkartenabrechnung_business",
        name: "Commerzbank Kreditkartenabrechnung Business",
        description: "i18n.collectors.commerzbank_kreditkartenabrechnung_business.description",
        version: "0",
        website: "https://www.kreditkartenbanking.de/businesscard/cos_std/dispatch.do;jsessionid=0001mpZQs5zVCVz2U3XAlPYI6Ge:1H4VRRFPLM?rai=0&ref=1500_CHAM&bt_STMTLIST=do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124836.jpg",
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
        entryUrl: "https://www.kreditkartenbanking.de/businesscard/cos_std/dispatch.do;jsessionid=0001mpZQs5zVCVz2U3XAlPYI6Ge:1H4VRRFPLM?rai=0&ref=1500_CHAM&bt_STMTLIST=do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CommerzbankKreditkartenabrechnungBusinessCollector.CONFIG);
    }
}
