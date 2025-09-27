
import { SketchCollector } from '../../sketchCollector';

export class VerheesTextilesCollector extends SketchCollector {

    static CONFIG = {
        id: "verhees_textiles",
        name: "Verhees Textiles",
        description: "i18n.collectors.verhees_textiles.description",
        version: "0",
        website: "https://www.verheestextiles.com/de/account/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181729.jpg",
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
        entryUrl: "https://www.verheestextiles.com/de/account/Invoices",
    }

    constructor() {
        super(VerheesTextilesCollector.CONFIG);
    }
}
