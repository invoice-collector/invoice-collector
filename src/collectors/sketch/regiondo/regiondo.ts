
import { SketchCollector } from '../../sketchCollector';

export class RegiondoCollector extends SketchCollector {

    static CONFIG = {
        id: "regiondo",
        name: "Regiondo",
        description: "i18n.collectors.regiondo.description",
        version: "0",
        website: "https://www.regiondo.de/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161948.jpg",
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
        entryUrl: "https://www.regiondo.de/customer/account/login",
    }

    constructor() {
        super(RegiondoCollector.CONFIG);
    }
}
