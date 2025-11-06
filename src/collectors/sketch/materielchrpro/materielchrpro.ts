import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaterielChrProCollector extends SketchCollector {

    static CONFIG = {
        id: "materielchrpro",
        name: "Materiel Chr Pro",
        description: "i18n.collectors.materielchrpro.description",
        version: "0",
        website: "https://www.materiel-chr-pro.com",
        logo: "https://www.materiel-chr-pro.com/static/version1761822080/frontend/MaterielCHR/materielchr/fr_FR/images/logo.svg",
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
        super(MaterielChrProCollector.CONFIG);
    }
}
