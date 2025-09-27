
import { SketchCollector } from '../../sketchCollector';

export class NotismIoCollector extends SketchCollector {

    static CONFIG = {
        id: "notism_io",
        name: "Notism.io",
        description: "i18n.collectors.notism_io.description",
        version: "0",
        website: "https://www.notism.io/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1357532.jpg",
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
        entryUrl: "https://www.notism.io/account",
    }

    constructor() {
        super(NotismIoCollector.CONFIG);
    }
}
