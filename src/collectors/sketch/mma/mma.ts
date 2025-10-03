import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MmaCollector extends SketchCollector {

    static CONFIG = {
        id: "mma",
        name: "MMA",
        description: "i18n.collectors.mma.description",
        version: "0",
        website: "https://mma.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Logo_MMA.jpg",
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
        entryUrl: "https://espace-client.mma.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MmaCollector.CONFIG);
    }
}
