
import { SketchCollector } from '../../sketchCollector';

export class TecspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "tecspace",
        name: "TecSpace",
        description: "i18n.collectors.tecspace.description",
        version: "0",
        website: "https://admin.tecspace.net/?action=invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17244.jpg",
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
        entryUrl: "https://admin.tecspace.net/?action=invoice",
    }

    constructor() {
        super(TecspaceCollector.CONFIG);
    }
}
