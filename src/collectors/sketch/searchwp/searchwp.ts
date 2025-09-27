
import { SketchCollector } from '../../sketchCollector';

export class SearchwpCollector extends SketchCollector {

    static CONFIG = {
        id: "searchwp",
        name: "SearchWP",
        description: "i18n.collectors.searchwp.description",
        version: "0",
        website: "http://www.searchwp.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70569.jpg",
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
        entryUrl: "http://www.searchwp.com",
    }

    constructor() {
        super(SearchwpCollector.CONFIG);
    }
}
