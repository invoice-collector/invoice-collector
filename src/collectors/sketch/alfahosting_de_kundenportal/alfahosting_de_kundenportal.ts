
import { SketchCollector } from '../../sketchCollector';

export class AlfahostingDeKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "alfahosting_de_kundenportal",
        name: "Alfahosting.de - Kundenportal",
        description: "i18n.collectors.alfahosting_de_kundenportal.description",
        version: "0",
        website: "https://secure.alfahosting.de/kunden/index.php/Benutzer:Logout",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/458.jpg",
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
        entryUrl: "https://secure.alfahosting.de/kunden/index.php/Benutzer:Logout",
    }

    constructor() {
        super(AlfahostingDeKundenportalCollector.CONFIG);
    }
}
