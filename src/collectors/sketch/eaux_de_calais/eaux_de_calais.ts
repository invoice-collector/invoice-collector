
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EauxDeCalaisCollector extends SketchCollector {

    static CONFIG = {
        id: "eaux_de_calais",
        name: "eaux de calais",
        description: "i18n.collectors.eaux_de_calais.description",
        version: "0",
        website: "https://www.eaux-de-calais.com/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837736.jpg",
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
        entryUrl: "https://www.eaux-de-calais.com/mon-compte-en-ligne/je-me-connecte",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauxDeCalaisCollector.CONFIG);
    }
}
