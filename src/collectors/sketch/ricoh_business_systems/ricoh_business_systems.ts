
import { SketchCollector } from '../../sketchCollector';

export class RicohBusinessSystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "ricoh_business_systems",
        name: "Ricoh Business Systems",
        description: "i18n.collectors.ricoh_business_systems.description",
        version: "0",
        website: "https://www.customerfinancing.com/Home/Auth/pl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798832.jpg",
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
        entryUrl: "https://www.customerfinancing.com/Home/Auth/pl",
    }

    constructor() {
        super(RicohBusinessSystemsCollector.CONFIG);
    }
}
