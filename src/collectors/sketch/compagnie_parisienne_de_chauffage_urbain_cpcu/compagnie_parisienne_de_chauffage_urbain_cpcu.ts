
import { SketchCollector } from '../../sketchCollector';

export class CompagnieParisienneDeChauffageUrbainCpcuCollector extends SketchCollector {

    static CONFIG = {
        id: "compagnie_parisienne_de_chauffage_urbain_cpcu",
        name: "Compagnie parisienne de chauffage urbain (CPCU)",
        description: "i18n.collectors.compagnie_parisienne_de_chauffage_urbain_cpcu.description",
        version: "0",
        website: "https://cpcu-ec.dsa-prod.myoddcloud.com/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2382499.jpg",
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
        entryUrl: "https://cpcu-ec.dsa-prod.myoddcloud.com/my/invoices",
    }

    constructor() {
        super(CompagnieParisienneDeChauffageUrbainCpcuCollector.CONFIG);
    }
}
