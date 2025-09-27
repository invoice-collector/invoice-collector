
import { SketchCollector } from '../../sketchCollector';

export class FahrradDeCollector extends SketchCollector {

    static CONFIG = {
        id: "fahrrad_de",
        name: "Fahrrad.de",
        description: "i18n.collectors.fahrrad_de.description",
        version: "0",
        website: "https://www.fahrrad.de/login/?original=%2Fkundenkonto%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37229.jpg",
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
        entryUrl: "https://www.fahrrad.de/login/?original=%2Fkundenkonto%2F",
    }

    constructor() {
        super(FahrradDeCollector.CONFIG);
    }
}
