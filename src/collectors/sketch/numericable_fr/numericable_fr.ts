
import { SketchCollector } from '../../sketchCollector';

export class NumericableFrCollector extends SketchCollector {

    static CONFIG = {
        id: "numericable_fr",
        name: "Numericable FR",
        description: "i18n.collectors.numericable_fr.description",
        version: "0",
        website: "https://connexion.numericable.fr/Oauth/Oauth.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/822232.jpg",
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
        entryUrl: "https://connexion.numericable.fr/Oauth/Oauth.php",
    }

    constructor() {
        super(NumericableFrCollector.CONFIG);
    }
}
