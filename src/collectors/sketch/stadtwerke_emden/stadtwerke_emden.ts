
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeEmdenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_emden",
        name: "Stadtwerke Emden",
        description: "i18n.collectors.stadtwerke_emden.description",
        version: "0",
        website: "https://csit.sw-emden.de/powercommerce/csit3/fo/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202700.jpg",
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
        entryUrl: "https://csit.sw-emden.de/powercommerce/csit3/fo/portal/start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeEmdenCollector.CONFIG);
    }
}
