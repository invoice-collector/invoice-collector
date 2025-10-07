
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrackingmoreCollector extends SketchCollector {

    static CONFIG = {
        id: "trackingmore",
        name: "TrackingMore",
        description: "i18n.collectors.trackingmore.description",
        version: "0",
        website: "https://www.trackingmore.com/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035255.jpg",
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
        entryUrl: "https://www.trackingmore.com/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrackingmoreCollector.CONFIG);
    }
}
