
import { SketchCollector } from '../../sketchCollector';

export class MutuelleSquadraCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_squadra",
        name: "Mutuelle Squadra",
        description: "i18n.collectors.mutuelle_squadra.description",
        version: "0",
        website: "http://www.mutuelle-et-assurance.net/tag/squadra/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131083.jpg",
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
        entryUrl: "http://www.mutuelle-et-assurance.net/tag/squadra/",
    }

    constructor() {
        super(MutuelleSquadraCollector.CONFIG);
    }
}
