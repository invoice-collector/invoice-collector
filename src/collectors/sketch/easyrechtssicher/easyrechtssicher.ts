
import { SketchCollector } from '../../sketchCollector';

export class EasyrechtssicherCollector extends SketchCollector {

    static CONFIG = {
        id: "easyrechtssicher",
        name: "easyRechtssicher",
        description: "i18n.collectors.easyrechtssicher.description",
        version: "0",
        website: "https://easyrechtssicher.de/konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347055.jpg",
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
        entryUrl: "https://easyrechtssicher.de/konto/",
    }

    constructor() {
        super(EasyrechtssicherCollector.CONFIG);
    }
}
