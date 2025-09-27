
import { SketchCollector } from '../../sketchCollector';

export class OctopusEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "octopus_energy",
        name: "Octopus Energy",
        description: "i18n.collectors.octopus_energy.description",
        version: "0",
        website: "https://octopusenergy.fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1163848.jpg",
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
        entryUrl: "https://octopusenergy.fr/connexion",
    }

    constructor() {
        super(OctopusEnergyCollector.CONFIG);
    }
}
