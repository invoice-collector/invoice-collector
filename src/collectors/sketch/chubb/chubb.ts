import { SketchCollector } from '../../sketchCollector';

export class ChubbCollector extends SketchCollector {

    static CONFIG = {
        id: "chubb",
        name: "Chubb",
        description: "i18n.collectors.chubb.description",
        version: "0",
        website: "https://chubb.com",
        logo: "https://companieslogo.com/img/orig/CB_BIG-be581ee6.svg",
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
        }
    }

    constructor() {
        super(ChubbCollector.CONFIG);
    }
}
