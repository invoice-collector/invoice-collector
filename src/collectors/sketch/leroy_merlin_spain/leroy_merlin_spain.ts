
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeyroyMerlinSpainCollector extends SketchCollector {

    static CONFIG = {
        id: "leroy_merlin_spain",
        name: "Leroy Merlin Spain",
        description: "i18n.collectors.leroy_merlin_spain.description",
        version: "0",
        website: "https://www.leroymerlin.es/mi-cuenta/mis-compras/historial",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4368011.jpg",
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
        entryUrl: "https://www.leroymerlin.es/mi-cuenta/mis-compras/historial",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeyroyMerlinSpainCollector.CONFIG);
    }
}
