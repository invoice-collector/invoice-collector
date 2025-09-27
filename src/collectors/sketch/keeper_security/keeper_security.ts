
import { SketchCollector } from '../../sketchCollector';

export class KeeperSecurityCollector extends SketchCollector {

    static CONFIG = {
        id: "keeper_security",
        name: "Keeper Security",
        description: "i18n.collectors.keeper_security.description",
        version: "0",
        website: "https://keepersecurity.eu/console/#subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1230977.jpg",
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
        entryUrl: "https://keepersecurity.eu/console/#subscriptions",
    }

    constructor() {
        super(KeeperSecurityCollector.CONFIG);
    }
}
