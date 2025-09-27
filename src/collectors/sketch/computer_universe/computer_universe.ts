
import { SketchCollector } from '../../sketchCollector';

export class ComputerUniverseCollector extends SketchCollector {

    static CONFIG = {
        id: "computer_universe",
        name: "computer universe",
        description: "i18n.collectors.computer_universe.description",
        version: "0",
        website: "https://www.computeruniverse.net/en/order/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988703.jpg",
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
        entryUrl: "https://www.computeruniverse.net/en/order/history",
    }

    constructor() {
        super(ComputerUniverseCollector.CONFIG);
    }
}
