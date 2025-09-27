
import { SketchCollector } from '../../sketchCollector';

export class LHommeModerneFashionCollector extends SketchCollector {

    static CONFIG = {
        id: "l_homme_moderne_fashion",
        name: "L\'homme moderne fashion",
        description: "i18n.collectors.l_homme_moderne_fashion.description",
        version: "0",
        website: "https://www.lhommemoderne.fr/authentification?back=my-account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120398.jpg",
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
        entryUrl: "https://www.lhommemoderne.fr/authentification?back=my-account.php",
    }

    constructor() {
        super(LHommeModerneFashionCollector.CONFIG);
    }
}
