
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZimpelOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "zimpel_online",
        name: "Zimpel Online",
        description: "i18n.collectors.zimpel_online.description",
        version: "0",
        website: "https://www.zimpel-online.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3081712.jpg",
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
        entryUrl: "https://www.zimpel-online.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZimpelOnlineCollector.CONFIG);
    }
}
