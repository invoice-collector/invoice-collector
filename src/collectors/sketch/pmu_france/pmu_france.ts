
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PmuFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "pmu_france",
        name: "PMU France",
        description: "i18n.collectors.pmu_france.description",
        version: "0",
        website: "https://www.pmu.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778784.jpg",
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
        entryUrl: "https://www.pmu.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PmuFranceCollector.CONFIG);
    }
}
