
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DecathlonFacturesCarteFideliteCollector extends SketchCollector {

    static CONFIG = {
        id: "decathlon_factures_carte_fidelite",
        name: "Decathlon (Factures carte fidelite)",
        description: "i18n.collectors.decathlon_factures_carte_fidelite.description",
        version: "1",
        website: "https://www.decathlon.fr/fr/loginPage",
        logo: "https://fr.m.wikipedia.org/wiki/Fichier:Decathlon_-_logo_%28France,_2024%29.svg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.decathlon.fr/fr/loginPage",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DecathlonFacturesCarteFideliteCollector.CONFIG);
    }
}
