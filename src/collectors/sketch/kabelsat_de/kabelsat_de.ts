
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KabelsatDeCollector extends SketchCollector {

    static CONFIG = {
        id: "kabelsat_de",
        name: "Kabelsat.de",
        description: "i18n.collectors.kabelsat_de.description",
        version: "0",
        website: "https://kundenportal.kabelsat.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9467.jpg",
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
        entryUrl: "https://kundenportal.kabelsat.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KabelsatDeCollector.CONFIG);
    }
}
