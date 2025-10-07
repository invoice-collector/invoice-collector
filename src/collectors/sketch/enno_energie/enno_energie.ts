
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnnoEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "enno_energie",
        name: "enno Energie",
        description: "i18n.collectors.enno_energie.description",
        version: "0",
        website: "https://www.enno-energie.de/kunden-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90712.jpg",
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
        entryUrl: "https://www.enno-energie.de/kunden-login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnnoEnergieCollector.CONFIG);
    }
}
