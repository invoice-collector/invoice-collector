
import { SketchCollector } from '../../sketchCollector';

export class SmartjobboardCollector extends SketchCollector {

    static CONFIG = {
        id: "smartjobboard",
        name: "SmartJobBoard",
        description: "i18n.collectors.smartjobboard.description",
        version: "0",
        website: "https://www.smartjobboard.com/ca/clientarea.php?action=products",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22157.jpg",
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
        entryUrl: "https://www.smartjobboard.com/ca/clientarea.php?action=products",
    }

    constructor() {
        super(SmartjobboardCollector.CONFIG);
    }
}
