
import { SketchCollector } from '../../sketchCollector';

export class BgvBadischeVersicherungMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "bgv_badische_versicherung_maklerportal",
        name: "BGV - Badische Versicherung - Maklerportal",
        description: "i18n.collectors.bgv_badische_versicherung_maklerportal.description",
        version: "0",
        website: "https://makler.bgv.de/makler/bestand/kundenverwaltung/epostkorb/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73646.jpg",
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
        entryUrl: "https://makler.bgv.de/makler/bestand/kundenverwaltung/epostkorb/",
    }

    constructor() {
        super(BgvBadischeVersicherungMaklerportalCollector.CONFIG);
    }
}
