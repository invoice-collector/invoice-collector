
import { SketchCollector } from '../../sketchCollector';

export class MakroCoZaCollector extends SketchCollector {

    static CONFIG = {
        id: "makro_co_za",
        name: "Makro.co.za",
        description: "i18n.collectors.makro_co_za.description",
        version: "0",
        website: "https://www.makro.co.za/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/403623.jpg",
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
        entryUrl: "https://www.makro.co.za/login",
    }

    constructor() {
        super(MakroCoZaCollector.CONFIG);
    }
}
