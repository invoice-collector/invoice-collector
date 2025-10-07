
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZattooCollector extends SketchCollector {

    static CONFIG = {
        id: "zattoo",
        name: "Zattoo",
        description: "i18n.collectors.zattoo.description",
        version: "0",
        website: "https://zattoo.com/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7123.jpg",
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
        entryUrl: "https://zattoo.com/settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZattooCollector.CONFIG);
    }
}
