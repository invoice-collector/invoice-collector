import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrenkeCollector extends SketchCollector {

    static CONFIG = {
        id: "grenke",
        name: "Grenke",
        description: "i18n.collectors.grenke.description",
        version: "0",
        website: "https://grenke.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Grenke_Logo_Black_2024.svg",
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
        entryUrl: "https://customerportal.grenke.net/en_uk/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrenkeCollector.CONFIG);
    }
}
