
import { SketchCollector } from '../../sketchCollector';

export class EpriceItCollector extends SketchCollector {

    static CONFIG = {
        id: "eprice_it",
        name: "ePRICE.it",
        description: "i18n.collectors.eprice_it.description",
        version: "0",
        website: "https://www.eprice.it/login.aspx?zona=5&dove=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50913.jpg",
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
        entryUrl: "https://www.eprice.it/login.aspx?zona=5&dove=0",
    }

    constructor() {
        super(EpriceItCollector.CONFIG);
    }
}
