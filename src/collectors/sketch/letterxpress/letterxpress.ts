
import { SketchCollector } from '../../sketchCollector';

export class LetterxpressCollector extends SketchCollector {

    static CONFIG = {
        id: "letterxpress",
        name: "LetterXpress",
        description: "i18n.collectors.letterxpress.description",
        version: "0",
        website: "https://www.letterxpress.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19383.jpg",
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
        entryUrl: "https://www.letterxpress.de/login",
    }

    constructor() {
        super(LetterxpressCollector.CONFIG);
    }
}
