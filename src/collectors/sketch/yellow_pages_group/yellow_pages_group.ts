
import { SketchCollector } from '../../sketchCollector';

export class YellowPagesGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "yellow_pages_group",
        name: "Yellow Pages Group",
        description: "i18n.collectors.yellow_pages_group.description",
        version: "0",
        website: "https://ypforbusiness.yellowpages.ca/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8520.jpg",
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
        entryUrl: "https://ypforbusiness.yellowpages.ca/dashboard",
    }

    constructor() {
        super(YellowPagesGroupCollector.CONFIG);
    }
}
