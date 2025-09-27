
import { SketchCollector } from '../../sketchCollector';

export class AllianzDeMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "allianz_de_maklerportal",
        name: "Allianz.de Maklerportal",
        description: "i18n.collectors.allianz_de_maklerportal.description",
        version: "0",
        website: "https://makler.allianz.de/res/startseite/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116118.jpg",
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
        entryUrl: "https://makler.allianz.de/res/startseite/index.html",
    }

    constructor() {
        super(AllianzDeMaklerportalCollector.CONFIG);
    }
}
