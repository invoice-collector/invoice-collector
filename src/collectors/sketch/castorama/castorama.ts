import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CastoramaCollector extends SketchCollector {

    static CONFIG = {
        id: "castorama",
        name: "Castorama",
        description: "i18n.collectors.castorama.description",
        version: "1",
        website: "https://castorama.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Castorama_-_logo_%28France%2C_2014-%29.svg",
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
        entryUrl: "https://www.castorama.fr/customer/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CastoramaCollector.CONFIG);
    }
}
