
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TransportForLondonCollector extends SketchCollector {

    static CONFIG = {
        id: "transport_for_london",
        name: "Transport for London",
        description: "i18n.collectors.transport_for_london.description",
        version: "0",
        website: "https://reg.web.tflcc.co.uk/TFL.LRUC.AccountAuth/S9",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221878.jpg",
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
        entryUrl: "https://reg.web.tflcc.co.uk/TFL.LRUC.AccountAuth/S9",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TransportForLondonCollector.CONFIG);
    }
}
