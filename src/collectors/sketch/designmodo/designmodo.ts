
import { SketchCollector } from '../../sketchCollector';

export class DesignmodoCollector extends SketchCollector {

    static CONFIG = {
        id: "designmodo",
        name: "Designmodo",
        description: "i18n.collectors.designmodo.description",
        version: "0",
        website: "https://designmodo.com/my-account/view-subscription/550265/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513820.jpg",
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
        entryUrl: "https://designmodo.com/my-account/view-subscription/550265/",
    }

    constructor() {
        super(DesignmodoCollector.CONFIG);
    }
}
