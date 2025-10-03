
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebinarisCollector extends SketchCollector {

    static CONFIG = {
        id: "webinaris",
        name: "webinaris",
        description: "i18n.collectors.webinaris.description",
        version: "0",
        website: "https://webinaris.co/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10778.jpg",
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
        entryUrl: "https://webinaris.co/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebinarisCollector.CONFIG);
    }
}
