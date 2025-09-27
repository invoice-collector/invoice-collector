
import { SketchCollector } from '../../sketchCollector';

export class SortlistCollector extends SketchCollector {

    static CONFIG = {
        id: "sortlist",
        name: "Sortlist",
        description: "i18n.collectors.sortlist.description",
        version: "0",
        website: "https://sortlist.recurly.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128534.jpg",
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
        entryUrl: "https://sortlist.recurly.com/account",
    }

    constructor() {
        super(SortlistCollector.CONFIG);
    }
}
