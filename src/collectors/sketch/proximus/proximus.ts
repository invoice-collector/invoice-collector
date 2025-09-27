
import { SketchCollector } from '../../sketchCollector';

export class ProximusCollector extends SketchCollector {

    static CONFIG = {
        id: "proximus",
        name: "Proximus",
        description: "i18n.collectors.proximus.description",
        version: "0",
        website: "https://www.proximus.be/myproximus/fr/Self-employed-and-small-companies/services/My-Bill__/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78133.jpg",
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
        entryUrl: "https://www.proximus.be/myproximus/fr/Self-employed-and-small-companies/services/My-Bill__/home",
    }

    constructor() {
        super(ProximusCollector.CONFIG);
    }
}
