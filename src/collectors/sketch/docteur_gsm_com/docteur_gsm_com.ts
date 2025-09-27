
import { SketchCollector } from '../../sketchCollector';

export class DocteurGsmComCollector extends SketchCollector {

    static CONFIG = {
        id: "docteur_gsm_com",
        name: "Docteur-gsm.com",
        description: "i18n.collectors.docteur_gsm_com.description",
        version: "0",
        website: "https://www.docteur-gsm.com/fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118649.jpg",
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
        entryUrl: "https://www.docteur-gsm.com/fr/authentification?back=my-account",
    }

    constructor() {
        super(DocteurGsmComCollector.CONFIG);
    }
}
