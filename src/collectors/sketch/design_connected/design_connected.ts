
import { SketchCollector } from '../../sketchCollector';

export class DesignConnectedCollector extends SketchCollector {

    static CONFIG = {
        id: "design_connected",
        name: "Design Connected",
        description: "i18n.collectors.design_connected.description",
        version: "0",
        website: "https://www.designconnected.com/connecter/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2003698.jpg",
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
        entryUrl: "https://www.designconnected.com/connecter/subscriptions",
    }

    constructor() {
        super(DesignConnectedCollector.CONFIG);
    }
}
