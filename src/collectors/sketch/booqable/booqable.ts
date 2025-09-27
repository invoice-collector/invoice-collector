
import { SketchCollector } from '../../sketchCollector';

export class BooqableCollector extends SketchCollector {

    static CONFIG = {
        id: "booqable",
        name: "Booqable",
        description: "i18n.collectors.booqable.description",
        version: "0",
        website: "https://login.booqable.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10897.jpg",
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
        entryUrl: "https://login.booqable.com/",
    }

    constructor() {
        super(BooqableCollector.CONFIG);
    }
}
