
import { SketchCollector } from '../../sketchCollector';

export class FarnellElement14OsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "farnell_element14_osterreich",
        name: "Farnell element14 Osterreich",
        description: "i18n.collectors.farnell_element14_osterreich.description",
        version: "0",
        website: "http://www.farnell.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55586.jpg",
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
        entryUrl: "http://www.farnell.com",
    }

    constructor() {
        super(FarnellElement14OsterreichCollector.CONFIG);
    }
}
