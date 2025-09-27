
import { SketchCollector } from '../../sketchCollector';

export class Shk4youPietschGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "shk_4you_pietsch_gruppe",
        name: "SHK-4YOU - Pietsch Gruppe",
        description: "i18n.collectors.shk_4you_pietsch_gruppe.description",
        version: "0",
        website: "https://www.shk-4you.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202628.jpg",
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
        entryUrl: "https://www.shk-4you.de/",
    }

    constructor() {
        super(Shk4youPietschGruppeCollector.CONFIG);
    }
}
