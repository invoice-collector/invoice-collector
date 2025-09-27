
import { SketchCollector } from '../../sketchCollector';

export class RamnodeCollector extends SketchCollector {

    static CONFIG = {
        id: "ramnode",
        name: "RamNode",
        description: "i18n.collectors.ramnode.description",
        version: "0",
        website: "https://clientarea.ramnode.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9913.jpg",
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
        entryUrl: "https://clientarea.ramnode.com/clientarea.php",
    }

    constructor() {
        super(RamnodeCollector.CONFIG);
    }
}
