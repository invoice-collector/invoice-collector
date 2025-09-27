
import { SketchCollector } from '../../sketchCollector';

export class ChadwicksGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "chadwicks_group",
        name: "Chadwicks Group",
        description: "i18n.collectors.chadwicks_group.description",
        version: "0",
        website: "https://grafton.softco.com/gmroi/Account/Login?ReturnUrl=%2Fgmroi%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761341.jpg",
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
        entryUrl: "https://grafton.softco.com/gmroi/Account/Login?ReturnUrl=%2Fgmroi%2F",
    }

    constructor() {
        super(ChadwicksGroupCollector.CONFIG);
    }
}
