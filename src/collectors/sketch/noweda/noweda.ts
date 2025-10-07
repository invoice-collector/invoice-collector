
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NowedaCollector extends SketchCollector {

    static CONFIG = {
        id: "noweda",
        name: "NOWEDA",
        description: "i18n.collectors.noweda.description",
        version: "0",
        website: "https://www.noweda.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1218027.jpg",
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
        entryUrl: "https://www.noweda.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NowedaCollector.CONFIG);
    }
}
