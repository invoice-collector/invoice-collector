
import { SketchCollector } from '../../sketchCollector';

export class VimcarCollector extends SketchCollector {

    static CONFIG = {
        id: "vimcar",
        name: "Vimcar",
        description: "i18n.collectors.vimcar.description",
        version: "0",
        website: "https://id.vimcar.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9899.jpg",
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
        entryUrl: "https://id.vimcar.com/invoices",
    }

    constructor() {
        super(VimcarCollector.CONFIG);
    }
}
