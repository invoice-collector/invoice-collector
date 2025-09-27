
import { SketchCollector } from '../../sketchCollector';

export class TrelloCollector extends SketchCollector {

    static CONFIG = {
        id: "trello",
        name: "Trello",
        description: "i18n.collectors.trello.description",
        version: "0",
        website: "https://trello.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6415.jpg",
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
        entryUrl: "https://trello.com/",
    }

    constructor() {
        super(TrelloCollector.CONFIG);
    }
}
