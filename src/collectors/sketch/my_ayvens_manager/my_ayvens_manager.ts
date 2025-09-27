
import { SketchCollector } from '../../sketchCollector';

export class MyAyvensManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "my_ayvens_manager",
        name: "My Ayvens Manager",
        description: "i18n.collectors.my_ayvens_manager.description",
        version: "0",
        website: "https://manager.ayvens.fr/portal/aldnetpal/depenses/votre_coffre_fort/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385671.jpg",
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
        entryUrl: "https://manager.ayvens.fr/portal/aldnetpal/depenses/votre_coffre_fort/factures",
    }

    constructor() {
        super(MyAyvensManagerCollector.CONFIG);
    }
}
