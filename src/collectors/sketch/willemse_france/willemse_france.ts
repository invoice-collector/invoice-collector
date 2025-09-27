
import { SketchCollector } from '../../sketchCollector';

export class WillemseFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "willemse_france",
        name: "Willemse France",
        description: "i18n.collectors.willemse_france.description",
        version: "0",
        website: "https://www.willemsefrance.fr/PBUserLogin.asp?CCode=33",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124019.jpg",
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
        entryUrl: "https://www.willemsefrance.fr/PBUserLogin.asp?CCode=33",
    }

    constructor() {
        super(WillemseFranceCollector.CONFIG);
    }
}
