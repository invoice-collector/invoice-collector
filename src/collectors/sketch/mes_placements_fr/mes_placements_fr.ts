
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MesPlacementsFrCollector extends SketchCollector {

    static CONFIG = {
        id: "mes_placements_fr",
        name: "mes-placements.fr",
        description: "i18n.collectors.mes_placements_fr.description",
        version: "0",
        website: "https://mes-placements.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778935.jpg",
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
        entryUrl: "https://mes-placements.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MesPlacementsFrCollector.CONFIG);
    }
}
