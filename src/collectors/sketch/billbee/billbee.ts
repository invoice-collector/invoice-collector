
import { SketchCollector } from '../../sketchCollector';

export class BillbeeCollector extends SketchCollector {

    static CONFIG = {
        id: "billbee",
        name: "billbee",
        description: "i18n.collectors.billbee.description",
        version: "0",
        website: "https://www.billbee.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6097.jpg",
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
        entryUrl: "https://www.billbee.de/login",
    }

    constructor() {
        super(BillbeeCollector.CONFIG);
    }
}
