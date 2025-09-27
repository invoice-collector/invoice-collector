
import { SketchCollector } from '../../sketchCollector';

export class AdmincolumnsCollector extends SketchCollector {

    static CONFIG = {
        id: "admincolumns",
        name: "admincolumns",
        description: "i18n.collectors.admincolumns.description",
        version: "0",
        website: "https://www.admincolumns.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552469.jpg",
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
        entryUrl: "https://www.admincolumns.com/my-account/orders/",
    }

    constructor() {
        super(AdmincolumnsCollector.CONFIG);
    }
}
