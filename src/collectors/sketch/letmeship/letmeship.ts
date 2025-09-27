
import { SketchCollector } from '../../sketchCollector';

export class LetmeshipCollector extends SketchCollector {

    static CONFIG = {
        id: "letmeship",
        name: "LetMeShip",
        description: "i18n.collectors.letmeship.description",
        version: "0",
        website: "https://www.letmeship.de/InvoicesArchive?2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119044.jpg",
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
        entryUrl: "https://www.letmeship.de/InvoicesArchive?2",
    }

    constructor() {
        super(LetmeshipCollector.CONFIG);
    }
}
