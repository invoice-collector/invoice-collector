
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IponCollector extends SketchCollector {

    static CONFIG = {
        id: "ipon",
        name: "iPon",
        description: "i18n.collectors.ipon.description",
        version: "0",
        website: "https://iponshop.at/shop",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153574.jpg",
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
        entryUrl: "https://iponshop.at/shop",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IponCollector.CONFIG);
    }
}
