
import { SketchCollector } from '../../sketchCollector';

export class BrainstormForceCollector extends SketchCollector {

    static CONFIG = {
        id: "brainstorm_force",
        name: "Brainstorm Force",
        description: "i18n.collectors.brainstorm_force.description",
        version: "0",
        website: "https://store.brainstormforce.com/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741903.jpg",
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
        entryUrl: "https://store.brainstormforce.com/purchase-history/",
    }

    constructor() {
        super(BrainstormForceCollector.CONFIG);
    }
}
