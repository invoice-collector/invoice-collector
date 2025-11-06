import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HiscoxCollector extends SketchCollector {

    static CONFIG = {
        id: "hiscox",
        name: "Hiscox",
        description: "i18n.collectors.hiscox.description",
        version: "0",
        website: "https://www.hiscox.fr",
        logo: "https://upload.wikimedia.org/wikipedia/de/7/7a/Logo_Hiscox.svg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HiscoxCollector.CONFIG);
    }
}
