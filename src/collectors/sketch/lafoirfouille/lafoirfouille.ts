import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaFoirFouilleCollector extends SketchCollector {

    static CONFIG = {
        id: "lafoirfouille",
        name: "La foir'fouille",
        description: "i18n.collectors.lafoirfouille.description",
        version: "0",
        website: "https://lafoirfouille.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Logo_La_Foir%27Fouille_2021.png",
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
        entryUrl: "https://www.lafoirfouille.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaFoirFouilleCollector.CONFIG);
    }
}
