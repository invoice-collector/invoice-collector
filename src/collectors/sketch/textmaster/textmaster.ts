
import { SketchCollector } from '../../sketchCollector';

export class TextmasterCollector extends SketchCollector {

    static CONFIG = {
        id: "textmaster",
        name: "TextMaster",
        description: "i18n.collectors.textmaster.description",
        version: "0",
        website: "http://de.textmaster.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/378.jpg",
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
        entryUrl: "http://de.textmaster.com/users/sign_in",
    }

    constructor() {
        super(TextmasterCollector.CONFIG);
    }
}
