
import { SketchCollector } from '../../sketchCollector';

export class FotoDrucken24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "foto_drucken24_de",
        name: "foto-drucken24.de",
        description: "i18n.collectors.foto_drucken24_de.description",
        version: "0",
        website: "https://www.foto-drucken24.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216269.jpg",
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
        entryUrl: "https://www.foto-drucken24.de/anmelden",
    }

    constructor() {
        super(FotoDrucken24DeCollector.CONFIG);
    }
}
