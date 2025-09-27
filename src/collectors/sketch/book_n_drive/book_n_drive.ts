
import { SketchCollector } from '../../sketchCollector';

export class BookNDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "book_n_drive",
        name: "book-n-drive",
        description: "i18n.collectors.book_n_drive.description",
        version: "0",
        website: "https://book-n-drive.dbcarsharing-buchung.de/kundenbuchung/process.php?proc=rechnung&f=5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27063.jpg",
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
        entryUrl: "https://book-n-drive.dbcarsharing-buchung.de/kundenbuchung/process.php?proc=rechnung&f=5",
    }

    constructor() {
        super(BookNDriveCollector.CONFIG);
    }
}
