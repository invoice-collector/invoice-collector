import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SfrCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr",
        name: "Sfr",
        description: "i18n.collectors.sfr.description",
        version: "0",
        website: "https://sfr.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/SFR-2022-logo.svg",
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
        entryUrl: "https://www.sfr.fr/mon-espace-client/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SfrCollector.CONFIG);
    }
}
