
import { SketchCollector } from '../../sketchCollector';

export class MaisonDuCableComCollector extends SketchCollector {

    static CONFIG = {
        id: "maison_du_cable_com",
        name: "Maison-du-cable.com",
        description: "i18n.collectors.maison_du_cable_com.description",
        version: "0",
        website: "https://www.maison-du-cable.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122301.jpg",
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
        entryUrl: "https://www.maison-du-cable.com/",
    }

    constructor() {
        super(MaisonDuCableComCollector.CONFIG);
    }
}
