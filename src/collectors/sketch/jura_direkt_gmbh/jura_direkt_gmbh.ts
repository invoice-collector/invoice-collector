
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JuraDirektGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "jura_direkt_gmbh",
        name: "Jura Direkt GmbH",
        description: "i18n.collectors.jura_direkt_gmbh.description",
        version: "0",
        website: "https://secure.juradirekt.com/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1202337.jpg",
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
        entryUrl: "https://secure.juradirekt.com/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JuraDirektGmbhCollector.CONFIG);
    }
}
