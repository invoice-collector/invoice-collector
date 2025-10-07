import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CasinoCollector extends SketchCollector {

    static CONFIG = {
        id: "casino",
        name: "Casino",
        description: "i18n.collectors.casino.description",
        version: "0",
        website: "https://casino.fr",
        logo: "https://cdn.worldvectorlogo.com/logos/casino-supermarket-logo.svg",
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
        entryUrl: "https://casino.fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CasinoCollector.CONFIG);
    }
}
