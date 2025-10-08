
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ManomanoCollector extends SketchCollector {

    static CONFIG = {
        id: "manomano",
        name: "ManoMano",
        description: "i18n.collectors.manomano.description",
        version: "1",
        website: "https://www.manomano.fr/se-connecter",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ManoMano_2018.png",
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
        entryUrl: "https://www.manomano.fr/se-connecter",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManomanoCollector.CONFIG);
    }
}
