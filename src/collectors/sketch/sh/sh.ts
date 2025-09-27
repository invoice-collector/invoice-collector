
import { SketchCollector } from '../../sketchCollector';

export class ShCollector extends SketchCollector {

    static CONFIG = {
        id: "sh",
        name: "SH",
        description: "i18n.collectors.sh.description",
        version: "0",
        website: "https://www.sh-diwi.de/diwi/accounting/accounting-overview.xhtml?c=2-0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120349.jpg",
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
        entryUrl: "https://www.sh-diwi.de/diwi/accounting/accounting-overview.xhtml?c=2-0",
    }

    constructor() {
        super(ShCollector.CONFIG);
    }
}
