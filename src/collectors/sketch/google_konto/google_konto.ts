
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleKontoCollector extends SketchCollector {

    static CONFIG = {
        id: "google_konto",
        name: "Google Konto",
        description: "i18n.collectors.google_konto.description",
        version: "0",
        website: "https://accounts.google.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534135.jpg",
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
        entryUrl: "https://accounts.google.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleKontoCollector.CONFIG);
    }
}
