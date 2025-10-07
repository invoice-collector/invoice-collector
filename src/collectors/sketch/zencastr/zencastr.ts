
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZencastrCollector extends SketchCollector {

    static CONFIG = {
        id: "zencastr",
        name: "Zencastr",
        description: "i18n.collectors.zencastr.description",
        version: "0",
        website: "https://zencastr.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45724.jpg",
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
        entryUrl: "https://zencastr.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZencastrCollector.CONFIG);
    }
}
