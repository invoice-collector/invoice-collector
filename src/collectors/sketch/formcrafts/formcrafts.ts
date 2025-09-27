
import { SketchCollector } from '../../sketchCollector';

export class FormcraftsCollector extends SketchCollector {

    static CONFIG = {
        id: "formcrafts",
        name: "Formcrafts",
        description: "i18n.collectors.formcrafts.description",
        version: "0",
        website: "https://formcrafts.com/dashboard/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213136.jpg",
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
        entryUrl: "https://formcrafts.com/dashboard/account",
    }

    constructor() {
        super(FormcraftsCollector.CONFIG);
    }
}
