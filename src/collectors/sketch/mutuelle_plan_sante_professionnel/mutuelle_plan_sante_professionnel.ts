
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuellePlanSanteProfessionnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_plan_sante_professionnel",
        name: "Mutuelle Plan Sante - Professionnel",
        description: "i18n.collectors.mutuelle_plan_sante_professionnel.description",
        version: "0",
        website: "https://ps.plansante.com/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130353.jpg",
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
        entryUrl: "https://ps.plansante.com/auth",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuellePlanSanteProfessionnelCollector.CONFIG);
    }
}
