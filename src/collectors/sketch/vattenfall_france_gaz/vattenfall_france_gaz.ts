
import { SketchCollector } from '../../sketchCollector';

export class VattenfallFranceGazCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_france_gaz",
        name: "Vattenfall France - Gaz",
        description: "i18n.collectors.vattenfall_france_gaz.description",
        version: "0",
        website: "https://espaceclientgaz.vattenfall-energies.fr/list/view/4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642218.jpg",
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
        entryUrl: "https://espaceclientgaz.vattenfall-energies.fr/list/view/4",
    }

    constructor() {
        super(VattenfallFranceGazCollector.CONFIG);
    }
}
