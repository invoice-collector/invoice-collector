
import { SketchCollector } from '../../sketchCollector';

export class PetroCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "petro_canada",
        name: "Petro-Canada",
        description: "i18n.collectors.petro_canada.description",
        version: "0",
        website: "https://www.petro-canada.ca/en/personal/petro-points-sign-up-activate?modalUrl=%2Fen%2Fpersonal%2Flogin#i-have-a-card",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408104.jpg",
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
        entryUrl: "https://www.petro-canada.ca/en/personal/petro-points-sign-up-activate?modalUrl=%2Fen%2Fpersonal%2Flogin#i-have-a-card",
    }

    constructor() {
        super(PetroCanadaCollector.CONFIG);
    }
}
