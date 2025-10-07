
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TollcollectCollector extends SketchCollector {

    static CONFIG = {
        id: "tollcollect",
        name: "TollCollect",
        description: "i18n.collectors.tollcollect.description",
        version: "0",
        website: "https://www.toll-collect.de/de/toll_collect/systemservice/login/Login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73419.jpg",
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
        entryUrl: "https://www.toll-collect.de/de/toll_collect/systemservice/login/Login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TollcollectCollector.CONFIG);
    }
}
