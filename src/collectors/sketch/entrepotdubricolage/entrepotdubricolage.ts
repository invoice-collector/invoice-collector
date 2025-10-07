import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EntrepotDuBricolageCollector extends SketchCollector {

    static CONFIG = {
        id: "entrepotdubricolage",
        name: "Entrepôt du bricolage",
        description: "i18n.collectors.entrepotdubricolage.description",
        version: "0",
        website: "https://entrepot-du-bricolage.fr",
        logo: "https://blog.entrepot-du-bricolage.fr/app/themes/entrepot-du-bricolage/dist/img/logo.svg",
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
        entryUrl: "https://www.entrepot-du-bricolage.fr/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EntrepotDuBricolageCollector.CONFIG);
    }
}
