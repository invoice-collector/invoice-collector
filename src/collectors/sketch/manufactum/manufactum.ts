
import { SketchCollector } from '../../sketchCollector';

export class ManufactumCollector extends SketchCollector {

    static CONFIG = {
        id: "manufactum",
        name: "Manufactum",
        description: "i18n.collectors.manufactum.description",
        version: "0",
        website: "https://www.manufactum.de/login?target=/kundenkonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027042.jpg",
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
        entryUrl: "https://www.manufactum.de/login?target=/kundenkonto",
    }

    constructor() {
        super(ManufactumCollector.CONFIG);
    }
}
