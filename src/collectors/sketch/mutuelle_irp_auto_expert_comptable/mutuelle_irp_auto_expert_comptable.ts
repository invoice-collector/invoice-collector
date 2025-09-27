
import { SketchCollector } from '../../sketchCollector';

export class MutuelleIrpAutoExpertComptableCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_irp_auto_expert_comptable",
        name: "Mutuelle IRP-Auto - Expert Comptable",
        description: "i18n.collectors.mutuelle_irp_auto_expert_comptable.description",
        version: "0",
        website: "https://www.irp-auto.com/acces-votre-compte-expert-comptable",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129076.jpg",
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
        entryUrl: "https://www.irp-auto.com/acces-votre-compte-expert-comptable",
    }

    constructor() {
        super(MutuelleIrpAutoExpertComptableCollector.CONFIG);
    }
}
