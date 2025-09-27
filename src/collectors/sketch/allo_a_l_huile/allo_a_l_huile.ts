
import { SketchCollector } from '../../sketchCollector';

export class AlloALHuileCollector extends SketchCollector {

    static CONFIG = {
        id: "allo_a_l_huile",
        name: "Allo a l\'huile",
        description: "i18n.collectors.allo_a_l_huile.description",
        version: "0",
        website: "https://www.alloalhuile.fr/EspaceClient.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777336.jpg",
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
        entryUrl: "https://www.alloalhuile.fr/EspaceClient.aspx",
    }

    constructor() {
        super(AlloALHuileCollector.CONFIG);
    }
}
