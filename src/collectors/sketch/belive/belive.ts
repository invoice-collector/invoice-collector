
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeliveCollector extends SketchCollector {

    static CONFIG = {
        id: "belive",
        name: "BeLive",
        description: "i18n.collectors.belive.description",
        version: "0",
        website: "http://www.belive.tv",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46113.jpg",
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
        entryUrl: "http://www.belive.tv",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeliveCollector.CONFIG);
    }
}
