
import { SketchCollector } from '../../sketchCollector';

export class GhCranesAndComponentsCollector extends SketchCollector {

    static CONFIG = {
        id: "gh_cranes_and_components",
        name: "GH CRANES & COMPONENTS",
        description: "i18n.collectors.gh_cranes_and_components.description",
        version: "0",
        website: "https://portal.ghcranes.com/clientesat/es/intervenciones",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4420555.jpg",
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
        entryUrl: "https://portal.ghcranes.com/clientesat/es/intervenciones",
    }

    constructor() {
        super(GhCranesAndComponentsCollector.CONFIG);
    }
}
