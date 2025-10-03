
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DreiKocheCollector extends SketchCollector {

    static CONFIG = {
        id: "drei_koche",
        name: "Drei Koche",
        description: "i18n.collectors.drei_koche.description",
        version: "0",
        website: "https://bestellen.drei-koeche.de/pages/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163754.jpg",
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
        entryUrl: "https://bestellen.drei-koeche.de/pages/dokumente",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DreiKocheCollector.CONFIG);
    }
}
