
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrackjsCollector extends SketchCollector {

    static CONFIG = {
        id: "trackjs",
        name: "TrackJS",
        description: "i18n.collectors.trackjs.description",
        version: "0",
        website: "https://my.trackjs.com/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8063.jpg",
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
        entryUrl: "https://my.trackjs.com/customer/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrackjsCollector.CONFIG);
    }
}
