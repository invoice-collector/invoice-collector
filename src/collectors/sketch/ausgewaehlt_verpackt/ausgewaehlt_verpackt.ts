
import { SketchCollector } from '../../sketchCollector';

export class AusgewaehltVerpacktCollector extends SketchCollector {

    static CONFIG = {
        id: "ausgewaehlt_verpackt",
        name: "Ausgewaehlt Verpackt",
        description: "i18n.collectors.ausgewaehlt_verpackt.description",
        version: "0",
        website: "https://www.ausgewaehlt.com/sales/order/invoice/order_id/5929/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2228055.jpg",
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
        entryUrl: "https://www.ausgewaehlt.com/sales/order/invoice/order_id/5929/",
    }

    constructor() {
        super(AusgewaehltVerpacktCollector.CONFIG);
    }
}
