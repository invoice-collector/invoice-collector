
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZanoxCollector extends SketchCollector {

    static CONFIG = {
        id: "zanox",
        name: "zanox",
        description: "i18n.collectors.zanox.description",
        version: "0",
        website: "https://marketplace.zanox.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/921.jpg",
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
        entryUrl: "https://marketplace.zanox.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZanoxCollector.CONFIG);
    }
}
