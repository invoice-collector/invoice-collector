import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HetznerCollector extends SketchCollector {

    static CONFIG = {
        id: "hetzner",
        name: "Hetzner",
        description: "i18n.collectors.hetzner.description",
        version: "0",
        website: "https://hetzner.de",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Logo_Hetzner.svg",
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
        entryUrl: "https://accounts.hetzner.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HetznerCollector.CONFIG);
    }
}
