
import { SketchCollector } from '../../sketchCollector';

export class ColorfabbCollector extends SketchCollector {

    static CONFIG = {
        id: "colorfabb",
        name: "ColorFabb",
        description: "i18n.collectors.colorfabb.description",
        version: "0",
        website: "https://colorfabb.com/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3249091.jpg",
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
        entryUrl: "https://colorfabb.com/sales/order/history/",
    }

    constructor() {
        super(ColorfabbCollector.CONFIG);
    }
}
