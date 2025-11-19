
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaPosteProCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_pro",
        name: "La Poste Pro",
        description: "i18n.collectors.la_poste_pro.description",
        version: "1",
        website: "https://www.laposte.fr/professionnel/espaceclient/factures",
        logo: "https://upload.wikimedia.org/wikipedia/fr/0/0d/La_Poste_2022.svg",
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
        entryUrl: "https://www.laposte.fr/professionnel/espaceclient/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaPosteProCollector.CONFIG);
    }
}
