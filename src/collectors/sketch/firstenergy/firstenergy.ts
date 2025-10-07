
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FirstenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "firstenergy",
        name: "FirstEnergy",
        description: "i18n.collectors.firstenergy.description",
        version: "0",
        website: "https://www.firstenergycorp.com/log_in.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8963.jpg",
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
        entryUrl: "https://www.firstenergycorp.com/log_in.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FirstenergyCollector.CONFIG);
    }
}
