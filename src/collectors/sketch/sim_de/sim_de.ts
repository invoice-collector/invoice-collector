
import { SketchCollector } from '../../sketchCollector';

export class SimDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sim_de",
        name: "sim.de",
        description: "i18n.collectors.sim_de.description",
        version: "0",
        website: "https://service.sim.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14244.jpg",
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
        entryUrl: "https://service.sim.de/",
    }

    constructor() {
        super(SimDeCollector.CONFIG);
    }
}
