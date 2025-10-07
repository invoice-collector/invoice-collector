
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BechtleCollector extends SketchCollector {

    static CONFIG = {
        id: "bechtle",
        name: "Bechtle",
        description: "i18n.collectors.bechtle.description",
        version: "0",
        website: "https://www.bechtle.com/beus/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108657.jpg",
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
        entryUrl: "https://www.bechtle.com/beus/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BechtleCollector.CONFIG);
    }
}
