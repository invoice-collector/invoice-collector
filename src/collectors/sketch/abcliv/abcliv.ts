
import { SketchCollector } from '../../sketchCollector';

export class AbclivCollector extends SketchCollector {

    static CONFIG = {
        id: "abcliv",
        name: "ABCliv",
        description: "i18n.collectors.abcliv.description",
        version: "0",
        website: "https://www.abcliv.net/Extranet_New",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126177.jpg",
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
        entryUrl: "https://www.abcliv.net/Extranet_New",
    }

    constructor() {
        super(AbclivCollector.CONFIG);
    }
}
