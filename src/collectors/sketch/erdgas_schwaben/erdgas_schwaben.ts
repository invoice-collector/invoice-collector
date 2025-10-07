
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ErdgasSchwabenCollector extends SketchCollector {

    static CONFIG = {
        id: "erdgas_schwaben",
        name: "Erdgas Schwaben",
        description: "i18n.collectors.erdgas_schwaben.description",
        version: "0",
        website: "https://erdgasschwaben.emobilitycloud.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75339.jpg",
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
        entryUrl: "https://erdgasschwaben.emobilitycloud.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErdgasSchwabenCollector.CONFIG);
    }
}
