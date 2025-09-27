
import { SketchCollector } from '../../sketchCollector';

export class QuisCollector extends SketchCollector {

    static CONFIG = {
        id: "quis",
        name: "Quis",
        description: "i18n.collectors.quis.description",
        version: "0",
        website: "https://selfservice.billwerk.com/portal/account.html#/qDJCTyOil-M4x0BSFW2gxg",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347362.jpg",
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
        entryUrl: "https://selfservice.billwerk.com/portal/account.html#/qDJCTyOil-M4x0BSFW2gxg",
    }

    constructor() {
        super(QuisCollector.CONFIG);
    }
}
