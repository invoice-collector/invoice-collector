
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WaternetCollector extends SketchCollector {

    static CONFIG = {
        id: "waternet",
        name: "Waternet",
        description: "i18n.collectors.waternet.description",
        version: "0",
        website: "https://mijn.waternet.nl/?_ga=2.193516461.1875114429.1524075147-2083055620.1524075147",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33387.jpg",
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
        entryUrl: "https://mijn.waternet.nl/?_ga=2.193516461.1875114429.1524075147-2083055620.1524075147",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WaternetCollector.CONFIG);
    }
}
