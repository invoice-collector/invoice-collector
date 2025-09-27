
import { SketchCollector } from '../../sketchCollector';

export class ChangeEnergyKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "change_energy_kundenportal",
        name: "Change! Energy-Kundenportal",
        description: "i18n.collectors.change_energy_kundenportal.description",
        version: "0",
        website: "https://kundenservice.change-energy.de/change-energy/#/loginRegistration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1083845.jpg",
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
        entryUrl: "https://kundenservice.change-energy.de/change-energy/#/loginRegistration",
    }

    constructor() {
        super(ChangeEnergyKundenportalCollector.CONFIG);
    }
}
