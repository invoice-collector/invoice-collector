
import { SketchCollector } from '../../sketchCollector';

export class TankpasNlCollector extends SketchCollector {

    static CONFIG = {
        id: "tankpas_nl",
        name: "tankpas.nl",
        description: "i18n.collectors.tankpas_nl.description",
        version: "0",
        website: "https://www.tankpas.nl/Portaal/Passen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32704.jpg",
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
        entryUrl: "https://www.tankpas.nl/Portaal/Passen",
    }

    constructor() {
        super(TankpasNlCollector.CONFIG);
    }
}
