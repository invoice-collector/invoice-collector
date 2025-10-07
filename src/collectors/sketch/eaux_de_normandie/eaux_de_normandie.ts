
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EauxDeNormandieCollector extends SketchCollector {

    static CONFIG = {
        id: "eaux_de_normandie",
        name: "eaux de Normandie",
        description: "i18n.collectors.eaux_de_normandie.description",
        version: "0",
        website: "https://www.usagers.eaux-de-normandie.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/813713.jpg",
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
        entryUrl: "https://www.usagers.eaux-de-normandie.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauxDeNormandieCollector.CONFIG);
    }
}
