
import { SketchCollector } from '../../sketchCollector';

export class CraftboxxCollector extends SketchCollector {

    static CONFIG = {
        id: "craftboxx",
        name: "Craftboxx",
        description: "i18n.collectors.craftboxx.description",
        version: "0",
        website: "https://planner.craftboxx.de/admin/companywide-settings#payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920049.jpg",
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
        entryUrl: "https://planner.craftboxx.de/admin/companywide-settings#payment",
    }

    constructor() {
        super(CraftboxxCollector.CONFIG);
    }
}
