
import { SketchCollector } from '../../sketchCollector';

export class Packen24Collector extends SketchCollector {

    static CONFIG = {
        id: "packen24",
        name: "Packen24",
        description: "i18n.collectors.packen24.description",
        version: "0",
        website: "https://www.packen24.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25491.jpg",
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
        entryUrl: "https://www.packen24.de/account",
    }

    constructor() {
        super(Packen24Collector.CONFIG);
    }
}
