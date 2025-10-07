
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IdealEnergieGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "ideal_energie_gmbh",
        name: "Ideal Energie GmbH",
        description: "i18n.collectors.ideal_energie_gmbh.description",
        version: "0",
        website: "https://www.idealenergie.de/kundenportal/anmeldung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90986.jpg",
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
        entryUrl: "https://www.idealenergie.de/kundenportal/anmeldung",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdealEnergieGmbhCollector.CONFIG);
    }
}
