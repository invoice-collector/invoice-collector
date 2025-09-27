
import { SketchCollector } from '../../sketchCollector';

export class SearchSeekersCollector extends SketchCollector {

    static CONFIG = {
        id: "search_seekers",
        name: "Search Seekers",
        description: "i18n.collectors.search_seekers.description",
        version: "0",
        website: "https://searchseekers.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1353709.jpg",
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
        entryUrl: "https://searchseekers.de/login/",
    }

    constructor() {
        super(SearchSeekersCollector.CONFIG);
    }
}
