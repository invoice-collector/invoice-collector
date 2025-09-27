
import { SketchCollector } from '../../sketchCollector';

export class GumtreeCollector extends SketchCollector {

    static CONFIG = {
        id: "gumtree",
        name: "Gumtree",
        description: "i18n.collectors.gumtree.description",
        version: "0",
        website: "https://my.gumtree.com/manage-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21951.jpg",
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
        entryUrl: "https://my.gumtree.com/manage-account/",
    }

    constructor() {
        super(GumtreeCollector.CONFIG);
    }
}
