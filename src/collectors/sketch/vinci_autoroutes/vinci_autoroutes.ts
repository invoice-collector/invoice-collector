
import { SketchCollector } from '../../sketchCollector';

export class VinciAutoroutesCollector extends SketchCollector {

    static CONFIG = {
        id: "vinci_autoroutes",
        name: "VINCI Autoroutes",
        description: "i18n.collectors.vinci_autoroutes.description",
        version: "0",
        website: "https://espaceabonnes.vinci-autoroutes.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27509.jpg",
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
        entryUrl: "https://espaceabonnes.vinci-autoroutes.com",
    }

    constructor() {
        super(VinciAutoroutesCollector.CONFIG);
    }
}
