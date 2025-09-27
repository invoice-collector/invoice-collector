
import { SketchCollector } from '../../sketchCollector';

export class MvvCollector extends SketchCollector {

    static CONFIG = {
        id: "mvv",
        name: "MVV",
        description: "i18n.collectors.mvv.description",
        version: "0",
        website: "https://ticketshop.mvv-muenchen.de/index.php/personal_data/orderList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172790.jpg",
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
        entryUrl: "https://ticketshop.mvv-muenchen.de/index.php/personal_data/orderList",
    }

    constructor() {
        super(MvvCollector.CONFIG);
    }
}
