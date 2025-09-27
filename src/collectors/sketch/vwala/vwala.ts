
import { SketchCollector } from '../../sketchCollector';

export class VwalaCollector extends SketchCollector {

    static CONFIG = {
        id: "vwala",
        name: "vwala",
        description: "i18n.collectors.vwala.description",
        version: "0",
        website: "https://www.vwa.la/#/dashboard/16445247/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189974.jpg",
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
        entryUrl: "https://www.vwa.la/#/dashboard/16445247/account",
    }

    constructor() {
        super(VwalaCollector.CONFIG);
    }
}
