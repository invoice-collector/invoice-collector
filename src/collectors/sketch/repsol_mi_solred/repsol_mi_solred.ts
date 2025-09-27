
import { SketchCollector } from '../../sketchCollector';

export class RepsolMiSolredCollector extends SketchCollector {

    static CONFIG = {
        id: "repsol_mi_solred",
        name: "Repsol - Mi Solred",
        description: "i18n.collectors.repsol_mi_solred.description",
        version: "0",
        website: "https://misolred.repsol.com/facturas",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4691062.jpg",
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
        entryUrl: "https://misolred.repsol.com/facturas",
    }

    constructor() {
        super(RepsolMiSolredCollector.CONFIG);
    }
}
