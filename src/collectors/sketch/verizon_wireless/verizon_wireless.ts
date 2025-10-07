
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerizonWirelessCollector extends SketchCollector {

    static CONFIG = {
        id: "verizon_wireless",
        name: "Verizon Wireless",
        description: "i18n.collectors.verizon_wireless.description",
        version: "0",
        website: "https://myvpostpay.verizonwireless.com/ui/bill/ao/viewbill#!/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6413.jpg",
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
        entryUrl: "https://myvpostpay.verizonwireless.com/ui/bill/ao/viewbill#!/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerizonWirelessCollector.CONFIG);
    }
}
