
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MirandoCollector extends SketchCollector {

    static CONFIG = {
        id: "mirando",
        name: "Mirando",
        description: "i18n.collectors.mirando.description",
        version: "0",
        website: "https://ads.mirando.de/credits/listall",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241765.jpg",
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
        entryUrl: "https://ads.mirando.de/credits/listall",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MirandoCollector.CONFIG);
    }
}
