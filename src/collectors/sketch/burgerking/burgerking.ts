import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BurgerKingCollector extends SketchCollector {

    static CONFIG = {
        id: "burgerking",
        name: "Burger king",
        description: "i18n.collectors.burgerking.description",
        version: "0",
        website: "https://burgerking.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg",
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
        entryUrl: "https://www.burgerking.fr/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BurgerKingCollector.CONFIG);
    }
}
