
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TinypngCollector extends SketchCollector {

    static CONFIG = {
        id: "tinypng",
        name: "TinyPNG",
        description: "i18n.collectors.tinypng.description",
        version: "0",
        website: "http://www.tinypng.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22906.jpg",
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
        entryUrl: "http://www.tinypng.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TinypngCollector.CONFIG);
    }
}
