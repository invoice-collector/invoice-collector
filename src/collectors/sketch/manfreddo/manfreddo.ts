
import { SketchCollector } from '../../sketchCollector';

export class ManfreddoCollector extends SketchCollector {

    static CONFIG = {
        id: "manfreddo",
        name: "Manfreddo",
        description: "i18n.collectors.manfreddo.description",
        version: "0",
        website: "https://www.manfreddo.com/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415014.jpg",
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
        entryUrl: "https://www.manfreddo.com/login.xhtml",
    }

    constructor() {
        super(ManfreddoCollector.CONFIG);
    }
}
