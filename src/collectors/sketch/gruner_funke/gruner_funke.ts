
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrunerFunkeCollector extends SketchCollector {

    static CONFIG = {
        id: "gruner_funke",
        name: "Gruner Funke",
        description: "i18n.collectors.gruner_funke.description",
        version: "0",
        website: "https://portal.gruenerfunke.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90987.jpg",
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
        entryUrl: "https://portal.gruenerfunke.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrunerFunkeCollector.CONFIG);
    }
}
