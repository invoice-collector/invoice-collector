
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SecanimCollector extends SketchCollector {

    static CONFIG = {
        id: "secanim",
        name: "secanim",
        description: "i18n.collectors.secanim.description",
        version: "0",
        website: "https://kundenportal.secanim.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210547.jpg",
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
        entryUrl: "https://kundenportal.secanim.de/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SecanimCollector.CONFIG);
    }
}
