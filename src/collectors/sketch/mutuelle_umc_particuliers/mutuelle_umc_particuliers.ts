
import { SketchCollector } from '../../sketchCollector';

export class MutuelleUmcParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_umc_particuliers",
        name: "Mutuelle UMC - Particuliers",
        description: "i18n.collectors.mutuelle_umc_particuliers.description",
        version: "0",
        website: "https://www.klesiamut.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130691.jpg",
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
        entryUrl: "https://www.klesiamut.fr/",
    }

    constructor() {
        super(MutuelleUmcParticuliersCollector.CONFIG);
    }
}
