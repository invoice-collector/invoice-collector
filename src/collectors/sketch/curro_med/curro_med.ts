
import { SketchCollector } from '../../sketchCollector';

export class CurroMedCollector extends SketchCollector {

    static CONFIG = {
        id: "curro_med",
        name: "Curro Med",
        description: "i18n.collectors.curro_med.description",
        version: "0",
        website: "https://www.curromed-shop.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197906.jpg",
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
        entryUrl: "https://www.curromed-shop.de/account/orders",
    }

    constructor() {
        super(CurroMedCollector.CONFIG);
    }
}
