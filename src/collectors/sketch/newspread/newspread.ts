
import { SketchCollector } from '../../sketchCollector';

export class NewspreadCollector extends SketchCollector {

    static CONFIG = {
        id: "newspread",
        name: "Newspread",
        description: "i18n.collectors.newspread.description",
        version: "0",
        website: "https://www.newspread.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747850.jpg",
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
        entryUrl: "https://www.newspread.ie/",
    }

    constructor() {
        super(NewspreadCollector.CONFIG);
    }
}
