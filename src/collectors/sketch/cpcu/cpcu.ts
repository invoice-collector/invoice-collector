import { SketchCollector } from '../../sketchCollector';

export class CpcuCollector extends SketchCollector {

    static CONFIG = {
        id: "cpcu",
        name: "Compagnie Parisienne de Chauffage Urbain (CPCU)",
        description: "i18n.collectors.cpcu.description",
        version: "0",
        website: "https://cpcu.fr",
        logo: "https://cdn.brandfetch.io/cpcu.fr/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
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
        }
    }

    constructor() {
        super(CpcuCollector.CONFIG);
    }
}
