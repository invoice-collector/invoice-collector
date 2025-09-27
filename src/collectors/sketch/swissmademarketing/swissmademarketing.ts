
import { SketchCollector } from '../../sketchCollector';

export class SwissmademarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "swissmademarketing",
        name: "SwissMadeMarketing",
        description: "i18n.collectors.swissmademarketing.description",
        version: "0",
        website: "https://www.swissmademarketing.com/apps/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15578.jpg",
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
        entryUrl: "https://www.swissmademarketing.com/apps/",
    }

    constructor() {
        super(SwissmademarketingCollector.CONFIG);
    }
}
