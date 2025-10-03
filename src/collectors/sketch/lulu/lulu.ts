
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LuluCollector extends SketchCollector {

    static CONFIG = {
        id: "lulu",
        name: "Lulu",
        description: "i18n.collectors.lulu.description",
        version: "0",
        website: "https://www.lulu.com/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102323.jpg",
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
        entryUrl: "https://www.lulu.com/fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LuluCollector.CONFIG);
    }
}
