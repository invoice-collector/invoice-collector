
import { SketchCollector } from '../../sketchCollector';

export class MinitoolsSrlCollector extends SketchCollector {

    static CONFIG = {
        id: "minitools_srl",
        name: "Minitools SRL",
        description: "i18n.collectors.minitools_srl.description",
        version: "0",
        website: "https://store.minitools.com/en/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801080.jpg",
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
        entryUrl: "https://store.minitools.com/en/sales/order/history/",
    }

    constructor() {
        super(MinitoolsSrlCollector.CONFIG);
    }
}
