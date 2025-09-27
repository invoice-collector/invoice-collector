
import { SketchCollector } from '../../sketchCollector';

export class FeiyrCollector extends SketchCollector {

    static CONFIG = {
        id: "feiyr",
        name: "Feiyr",
        description: "i18n.collectors.feiyr.description",
        version: "0",
        website: "https://accounts.feiyr.com/statements.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194679.jpg",
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
        entryUrl: "https://accounts.feiyr.com/statements.html",
    }

    constructor() {
        super(FeiyrCollector.CONFIG);
    }
}
