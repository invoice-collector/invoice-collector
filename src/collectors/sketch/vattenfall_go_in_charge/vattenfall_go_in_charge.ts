
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallGoInChargeCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_go_in_charge",
        name: "Vattenfall Go in Charge",
        description: "i18n.collectors.vattenfall_go_in_charge.description",
        version: "0",
        website: "https://my.goincharge.com/#/customer/cards/report/cards-overview?filters=%7B%22dateRange%22:%7B%22startTime%22:%222023-08-04T22:00:00.000Z%22,%22endTime%22:%222023-09-03T22:00:00.000Z%22%7D,%22cards%22:%5B%5D,%22cities%22:%5B%5D,%22stations%22:%5B%5D,%22c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128497.jpg",
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
        loginUrl: "https://my.goincharge.com/#/customer/cards/report/cards-overview?filters=%7B%22dateRange%22:%7B%22startTime%22:%222023-08-04T22:00:00.000Z%22,%22endTime%22:%222023-09-03T22:00:00.000Z%22%7D,%22cards%22:%5B%5D,%22cities%22:%5B%5D,%22stations%22:%5B%5D,%22c",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VattenfallGoInChargeCollector.CONFIG);
    }
}
