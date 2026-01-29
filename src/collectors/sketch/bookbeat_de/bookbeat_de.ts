
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BookbeatDeCollector extends SketchCollector {

    static CONFIG = {
        id: "bookbeat_de",
        name: "BookBeat.de",
        description: "i18n.collectors.bookbeat_de.description",
        version: "0",
        website: "https://www.bookbeat.de/konto/belege",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778122.jpg",
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
        loginUrl: "https://www.bookbeat.de/konto/belege",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BookbeatDeCollector.CONFIG);
    }
}
