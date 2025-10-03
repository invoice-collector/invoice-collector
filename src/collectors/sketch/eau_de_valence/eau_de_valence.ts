
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EauDeValenceCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_de_valence",
        name: "Eau de Valence",
        description: "i18n.collectors.eau_de_valence.description",
        version: "0",
        website: "https://espaceclient.valenceromanseau.fr/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3062232.jpg",
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
        entryUrl: "https://espaceclient.valenceromanseau.fr/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauDeValenceCollector.CONFIG);
    }
}
