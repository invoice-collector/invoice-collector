import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HirschIsolationCollector extends SketchCollector {

    static CONFIG = {
        id: "hirschisolation",
        name: "Hirsch Isolation",
        description: "i18n.collectors.hirschisolation.description",
        version: "0",
        website: "https://hirschisolation.fr",
        logo: "https://hirschisolation.fr/wp-content/themes/placo/img/hirsch-france-logo-black.png",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HirschIsolationCollector.CONFIG);
    }
}
