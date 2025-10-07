
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebreusCollector extends SketchCollector {

    static CONFIG = {
        id: "webreus",
        name: "WebReus",
        description: "i18n.collectors.webreus.description",
        version: "0",
        website: "http://www.webreus.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32251.jpg",
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
        entryUrl: "http://www.webreus.nl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebreusCollector.CONFIG);
    }
}
