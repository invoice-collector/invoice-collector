
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EventworxCollector extends SketchCollector {

    static CONFIG = {
        id: "eventworx",
        name: "Eventworx",
        description: "i18n.collectors.eventworx.description",
        version: "0",
        website: "http://www.eventworx.biz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/204968.jpg",
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
        entryUrl: "http://www.eventworx.biz",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EventworxCollector.CONFIG);
    }
}
