
import { SketchCollector } from '../../sketchCollector';

export class EnergiaUkBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "energia_uk_business",
        name: "Energia UK Business",
        description: "i18n.collectors.energia_uk_business.description",
        version: "0",
        website: "https://www.energia-online.co.uk/energiaplus/Energia.Utilities.Q4C.WebPages/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89499.jpg",
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
        entryUrl: "https://www.energia-online.co.uk/energiaplus/Energia.Utilities.Q4C.WebPages/Login.aspx",
    }

    constructor() {
        super(EnergiaUkBusinessCollector.CONFIG);
    }
}
