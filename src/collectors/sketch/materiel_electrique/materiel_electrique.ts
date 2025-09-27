
import { SketchCollector } from '../../sketchCollector';

export class MaterielElectriqueCollector extends SketchCollector {

    static CONFIG = {
        id: "materiel_electrique",
        name: "Materiel Electrique",
        description: "i18n.collectors.materiel_electrique.description",
        version: "0",
        website: "https://www.materielelectrique.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122299.jpg",
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
        entryUrl: "https://www.materielelectrique.com/login",
    }

    constructor() {
        super(MaterielElectriqueCollector.CONFIG);
    }
}
