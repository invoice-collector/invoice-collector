
import { SketchCollector } from '../../sketchCollector';

export class SideCoCollector extends SketchCollector {

    static CONFIG = {
        id: "side_co",
        name: "Side.co",
        description: "i18n.collectors.side_co.description",
        version: "0",
        website: "https://team.side.co/beta/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112900.jpg",
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
        entryUrl: "https://team.side.co/beta/invoices",
    }

    constructor() {
        super(SideCoCollector.CONFIG);
    }
}
