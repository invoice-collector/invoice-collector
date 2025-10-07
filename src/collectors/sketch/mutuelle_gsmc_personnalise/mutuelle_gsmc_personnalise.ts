
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGsmcPersonnaliseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gsmc_personnalise",
        name: "Mutuelle GSMC - PERSONNALISE",
        description: "i18n.collectors.mutuelle_gsmc_personnalise.description",
        version: "0",
        website: "https://www.mutuelle-gsmc.fr/prive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128485.jpg",
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
        entryUrl: "https://www.mutuelle-gsmc.fr/prive",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGsmcPersonnaliseCollector.CONFIG);
    }
}
