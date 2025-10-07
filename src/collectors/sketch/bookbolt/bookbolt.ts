
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BookboltCollector extends SketchCollector {

    static CONFIG = {
        id: "bookbolt",
        name: "Bookbolt",
        description: "i18n.collectors.bookbolt.description",
        version: "0",
        website: "https://members.bookbolt.io/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2110709.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://members.bookbolt.io/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BookboltCollector.CONFIG);
    }
}
