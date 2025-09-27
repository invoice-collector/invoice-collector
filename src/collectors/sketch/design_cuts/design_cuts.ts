
import { SketchCollector } from '../../sketchCollector';

export class DesignCutsCollector extends SketchCollector {

    static CONFIG = {
        id: "design_cuts",
        name: "Design Cuts",
        description: "i18n.collectors.design_cuts.description",
        version: "0",
        website: "https://www.designcuts.com/your-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11296.jpg",
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
        entryUrl: "https://www.designcuts.com/your-account/",
    }

    constructor() {
        super(DesignCutsCollector.CONFIG);
    }
}
