
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShellEnergyEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "shell_energy_europe",
        name: "Shell Energy Europe",
        description: "i18n.collectors.shell_energy_europe.description",
        version: "1",
        website: "https://energyeurope.shell.com/s/invoices",
        logo: "https://cdn.worldvectorlogo.com/logos/shell-energy.svg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://energyeurope.shell.com/s/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShellEnergyEuropeCollector.CONFIG);
    }
}
