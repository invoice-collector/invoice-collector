
import { SketchCollector } from '../../sketchCollector';

export class ThelemAssurancesParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "thelem_assurances_particuliers",
        name: "Thelem Assurances - Particuliers",
        description: "i18n.collectors.thelem_assurances_particuliers.description",
        version: "0",
        website: "https://www.thelem-assurances.fr/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108148.jpg",
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
        entryUrl: "https://www.thelem-assurances.fr/#",
    }

    constructor() {
        super(ThelemAssurancesParticuliersCollector.CONFIG);
    }
}
