
import { SketchCollector } from '../../sketchCollector';

export class DragdisCollector extends SketchCollector {

    static CONFIG = {
        id: "dragdis",
        name: "Dragdis",
        description: "i18n.collectors.dragdis.description",
        version: "0",
        website: "https://dragdis.com/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6582.jpg",
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
        entryUrl: "https://dragdis.com/Account/Login",
    }

    constructor() {
        super(DragdisCollector.CONFIG);
    }
}
