
import { SketchCollector } from '../../sketchCollector';

export class FilterizeCollector extends SketchCollector {

    static CONFIG = {
        id: "filterize",
        name: "filterize",
        description: "i18n.collectors.filterize.description",
        version: "0",
        website: "https://my.filterize.net/62428332/p/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778127.jpg",
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
        entryUrl: "https://my.filterize.net/62428332/p/payment",
    }

    constructor() {
        super(FilterizeCollector.CONFIG);
    }
}
