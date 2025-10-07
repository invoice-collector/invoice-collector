
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CollmexCollector extends SketchCollector {

    static CONFIG = {
        id: "collmex",
        name: "Collmex",
        description: "i18n.collectors.collmex.description",
        version: "0",
        website: "https://www.collmex.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/495.jpg",
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
        entryUrl: "https://www.collmex.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CollmexCollector.CONFIG);
    }
}
