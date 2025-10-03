
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TakeEWayCollector extends SketchCollector {

    static CONFIG = {
        id: "take_e_way",
        name: "Take E Way",
        description: "i18n.collectors.take_e_way.description",
        version: "0",
        website: "https://kundenportal.take-e-way.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62736.jpg",
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
        entryUrl: "https://kundenportal.take-e-way.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TakeEWayCollector.CONFIG);
    }
}
