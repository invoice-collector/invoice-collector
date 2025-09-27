
import { SketchCollector } from '../../sketchCollector';

export class FreeflySystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "freefly_systems",
        name: "Freefly Systems",
        description: "i18n.collectors.freefly_systems.description",
        version: "0",
        website: "https://store.freeflysystems.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42432.jpg",
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
        entryUrl: "https://store.freeflysystems.com/account",
    }

    constructor() {
        super(FreeflySystemsCollector.CONFIG);
    }
}
