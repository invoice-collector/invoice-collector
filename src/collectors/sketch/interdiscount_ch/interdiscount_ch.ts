
import { SketchCollector } from '../../sketchCollector';

export class InterdiscountChCollector extends SketchCollector {

    static CONFIG = {
        id: "interdiscount_ch",
        name: "Interdiscount CH",
        description: "i18n.collectors.interdiscount_ch.description",
        version: "0",
        website: "https://www.interdiscount.ch/de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2987726.jpg",
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
        entryUrl: "https://www.interdiscount.ch/de/account",
    }

    constructor() {
        super(InterdiscountChCollector.CONFIG);
    }
}
