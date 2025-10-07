
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TauronCollector extends SketchCollector {

    static CONFIG = {
        id: "tauron",
        name: "Tauron",
        description: "i18n.collectors.tauron.description",
        version: "0",
        website: "https://moj.tauron.pl/Home/Pages/Archiwum-dokumentow",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881890.jpg",
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
        entryUrl: "https://moj.tauron.pl/Home/Pages/Archiwum-dokumentow",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TauronCollector.CONFIG);
    }
}
