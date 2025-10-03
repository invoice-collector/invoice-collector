
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThomaslloydCollector extends SketchCollector {

    static CONFIG = {
        id: "thomaslloyd",
        name: "ThomasLloyd",
        description: "i18n.collectors.thomaslloyd.description",
        version: "0",
        website: "https://tl.vpportal.de/show/Posteingang",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68440.jpg",
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
        entryUrl: "https://tl.vpportal.de/show/Posteingang",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThomaslloydCollector.CONFIG);
    }
}
