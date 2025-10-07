
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NorseenergyCollector extends SketchCollector {

    static CONFIG = {
        id: "norseenergy",
        name: "NorseEnergy",
        description: "i18n.collectors.norseenergy.description",
        version: "0",
        website: "http://www.norseenergy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8987.jpg",
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
        entryUrl: "http://www.norseenergy.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NorseenergyCollector.CONFIG);
    }
}
