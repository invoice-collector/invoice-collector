
import { SketchCollector } from '../../sketchCollector';

export class PyurVertriebspartnerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "pyur_vertriebspartner_portal",
        name: "Pyur Vertriebspartner Portal",
        description: "i18n.collectors.pyur_vertriebspartner_portal.description",
        version: "0",
        website: "https://www.pyur.tools/isa/provision",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1242916.jpg",
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
        entryUrl: "https://www.pyur.tools/isa/provision",
    }

    constructor() {
        super(PyurVertriebspartnerPortalCollector.CONFIG);
    }
}
