
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Immoware24Collector extends SketchCollector {

    static CONFIG = {
        id: "immoware24",
        name: "Immoware24",
        description: "i18n.collectors.immoware24.description",
        version: "0",
        website: "https://www.awi-rems.de/router/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30021.jpg",
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
        entryUrl: "https://www.awi-rems.de/router/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Immoware24Collector.CONFIG);
    }
}
