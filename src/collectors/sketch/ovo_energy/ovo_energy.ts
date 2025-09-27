
import { SketchCollector } from '../../sketchCollector';

export class OvoEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "ovo_energy",
        name: "OVO Energy",
        description: "i18n.collectors.ovo_energy.description",
        version: "0",
        website: "https://account.ovoenergy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2003446.jpg",
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
        entryUrl: "https://account.ovoenergy.com/",
    }

    constructor() {
        super(OvoEnergyCollector.CONFIG);
    }
}
