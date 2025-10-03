
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BohlsenerMuhleCollector extends SketchCollector {

    static CONFIG = {
        id: "bohlsener_muhle",
        name: "Bohlsener Muhle",
        description: "i18n.collectors.bohlsener_muhle.description",
        version: "0",
        website: "https://bohlsener-muehle.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777210.jpg",
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
        entryUrl: "https://bohlsener-muehle.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BohlsenerMuhleCollector.CONFIG);
    }
}
