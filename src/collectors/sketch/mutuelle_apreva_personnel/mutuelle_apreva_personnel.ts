
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleAprevaPersonnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_apreva_personnel",
        name: "Mutuelle Apreva Personnel",
        description: "i18n.collectors.mutuelle_apreva_personnel.description",
        version: "0",
        website: "https://adherent.apreva.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127320.jpg",
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
        entryUrl: "https://adherent.apreva.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleAprevaPersonnelCollector.CONFIG);
    }
}
