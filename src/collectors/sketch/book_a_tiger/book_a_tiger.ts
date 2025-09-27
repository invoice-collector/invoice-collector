
import { SketchCollector } from '../../sketchCollector';

export class BookATigerCollector extends SketchCollector {

    static CONFIG = {
        id: "book_a_tiger",
        name: "BOOK A TIGER",
        description: "i18n.collectors.book_a_tiger.description",
        version: "0",
        website: "https://www.bookatiger.com/de-en/app/closet/my-bookings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20857.jpg",
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
        entryUrl: "https://www.bookatiger.com/de-en/app/closet/my-bookings",
    }

    constructor() {
        super(BookATigerCollector.CONFIG);
    }
}
