
import { SketchCollector } from '../../sketchCollector';

export class MannheimerMorgenCollector extends SketchCollector {

    static CONFIG = {
        id: "mannheimer_morgen",
        name: "Mannheimer Morgen",
        description: "i18n.collectors.mannheimer_morgen.description",
        version: "0",
        website: "https://www2.mannheimer-morgen.de/service/mein_profil/plenigo_dashboard.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239479.jpg",
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
        entryUrl: "https://www2.mannheimer-morgen.de/service/mein_profil/plenigo_dashboard.html",
    }

    constructor() {
        super(MannheimerMorgenCollector.CONFIG);
    }
}
