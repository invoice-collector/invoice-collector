
import { SketchCollector } from '../../sketchCollector';

export class FonciaMaibergerHausverwaltungCollector extends SketchCollector {

    static CONFIG = {
        id: "foncia_maiberger_hausverwaltung",
        name: "Foncia Maiberger Hausverwaltung",
        description: "i18n.collectors.foncia_maiberger_hausverwaltung.description",
        version: "0",
        website: "https://fonciamaiberger.mycasavi.com/app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/775993.jpg",
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
        entryUrl: "https://fonciamaiberger.mycasavi.com/app/login",
    }

    constructor() {
        super(FonciaMaibergerHausverwaltungCollector.CONFIG);
    }
}
