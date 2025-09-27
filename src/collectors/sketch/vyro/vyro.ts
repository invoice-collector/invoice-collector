
import { SketchCollector } from '../../sketchCollector';

export class VyroCollector extends SketchCollector {

    static CONFIG = {
        id: "vyro",
        name: "Vyro",
        description: "i18n.collectors.vyro.description",
        version: "0",
        website: "https://billing.vyro.ai/p/session/live_YWNjdF8xTjFUNWFKc0FuQ3RNcU4yLF9QZnVVM1NQbGxPbXZsQXhVUlRIMTBlbjQyS1pNSDh00100YSlVk2jI",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2705613.jpg",
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
        entryUrl: "https://billing.vyro.ai/p/session/live_YWNjdF8xTjFUNWFKc0FuQ3RNcU4yLF9QZnVVM1NQbGxPbXZsQXhVUlRIMTBlbjQyS1pNSDh00100YSlVk2jI",
    }

    constructor() {
        super(VyroCollector.CONFIG);
    }
}
