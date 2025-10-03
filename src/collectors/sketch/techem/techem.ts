import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TechemCollector extends SketchCollector {

    static CONFIG = {
        id: "techem",
        name: "Techem",
        description: "i18n.collectors.techem.description",
        version: "0",
        website: "https://techem.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Techem_Logo.svg",
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
        entryUrl: "https://client.techem.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TechemCollector.CONFIG);
    }
}
