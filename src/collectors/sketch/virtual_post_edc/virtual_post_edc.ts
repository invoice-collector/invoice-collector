
import { SketchCollector } from '../../sketchCollector';

export class VirtualPostEdcCollector extends SketchCollector {

    static CONFIG = {
        id: "virtual_post_edc",
        name: "Virtual-Post EDC",
        description: "i18n.collectors.virtual_post_edc.description",
        version: "0",
        website: "https://www.virtual-post.net/websuivi/login?action=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375790.jpg",
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
        entryUrl: "https://www.virtual-post.net/websuivi/login?action=login",
    }

    constructor() {
        super(VirtualPostEdcCollector.CONFIG);
    }
}
