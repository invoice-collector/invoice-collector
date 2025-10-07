
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkePotsdamCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_potsdam",
        name: "Stadtwerke Potsdam",
        description: "i18n.collectors.stadtwerke_potsdam.description",
        version: "0",
        website: "https://service.swp-potsdam.de/powercommerce/swp/fo/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729797.jpg",
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
        entryUrl: "https://service.swp-potsdam.de/powercommerce/swp/fo/portal/start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkePotsdamCollector.CONFIG);
    }
}
