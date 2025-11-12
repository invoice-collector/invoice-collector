import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PointEFrCollector extends SketchCollector {

    static CONFIG = {
        id: "point_e_fr",
        name: "Point E (.fr)",
        description: "i18n.collectors.point_e_fr.description",
        version: "0",
        website: "https://boutique.point-e.fr",
        logo: "https://boutique.point-e.fr/img/logo-17181172851.jpg",
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
        super(PointEFrCollector.CONFIG);
    }
}
