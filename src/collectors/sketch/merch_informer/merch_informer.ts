
import { SketchCollector } from '../../sketchCollector';

export class MerchInformerCollector extends SketchCollector {

    static CONFIG = {
        id: "merch_informer",
        name: "Merch Informer",
        description: "i18n.collectors.merch_informer.description",
        version: "0",
        website: "https://members.merchinformer.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108376.jpg",
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
        entryUrl: "https://members.merchinformer.com/invoices",
    }

    constructor() {
        super(MerchInformerCollector.CONFIG);
    }
}
