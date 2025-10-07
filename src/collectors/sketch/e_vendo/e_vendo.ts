
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EVendoCollector extends SketchCollector {

    static CONFIG = {
        id: "e_vendo",
        name: "e-vendo",
        description: "i18n.collectors.e_vendo.description",
        version: "0",
        website: "https://www.e-vendo.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/562.jpg",
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
        entryUrl: "https://www.e-vendo.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EVendoCollector.CONFIG);
    }
}
