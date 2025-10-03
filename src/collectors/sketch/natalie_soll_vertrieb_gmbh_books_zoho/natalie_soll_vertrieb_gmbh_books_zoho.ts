
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NatalieSollVertriebGmbhBooksZohoCollector extends SketchCollector {

    static CONFIG = {
        id: "natalie_soll_vertrieb_gmbh_books_zoho",
        name: "Natalie Soll Vertrieb GmbH - Books Zoho",
        description: "i18n.collectors.natalie_soll_vertrieb_gmbh_books_zoho.description",
        version: "0",
        website: "https://books.zoho.com/portal/soellvertrieb/index#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737690.jpg",
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
        entryUrl: "https://books.zoho.com/portal/soellvertrieb/index#/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NatalieSollVertriebGmbhBooksZohoCollector.CONFIG);
    }
}
