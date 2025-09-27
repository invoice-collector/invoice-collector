
import { SketchCollector } from '../../sketchCollector';

export class BooklookerCollector extends SketchCollector {

    static CONFIG = {
        id: "booklooker",
        name: "Booklooker",
        description: "i18n.collectors.booklooker.description",
        version: "0",
        website: "https://www.booklooker.de/app/priv/deals.php?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53523.jpg",
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
        entryUrl: "https://www.booklooker.de/app/priv/deals.php?",
    }

    constructor() {
        super(BooklookerCollector.CONFIG);
    }
}
